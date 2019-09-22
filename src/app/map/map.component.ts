import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  locations: any;
  currentGeoloc: any;
  type: 'water' | 'gasoline' | 'canned food';
  loading = false;



  constructor(private route: ActivatedRoute, private db: AngularFirestore) {}

  ngOnInit() {
    this.loading = true;
    this.reqGeo();
    this.route.queryParamMap.subscribe((params: Params) => {
      this.type = params.get('type');
      this.db
        .collection('Locations', ref => {
          return ref.where('type', '==', this.type);
        })
        .valueChanges()
        .subscribe((locations: any) => {
          this.locations = locations;
          console.log(this.locations);
       });
    });
    this.loading = false;
  }

  reqGeo() {
    this.loading = true;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(geoloc => {
         this.currentGeoloc = geoloc.coords;
      },
      error => {
        console.error(error);
      });
      this.loading = false;
    }
  }

}
