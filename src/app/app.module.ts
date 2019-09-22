import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { SignupComponent } from './signup/signup.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import { MapComponent } from './map/map.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AgmCoreModule} from "@agm/core";
import { AzmapComponent } from './azmap/azmap.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    AgmCoreModule.forRoot({
      apiKey: environment.google_maps.apiKey
    })
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MainMenuComponent,
    MapComponent,
    AzmapComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
