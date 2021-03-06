import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private fbAuth: AngularFireAuth, private router: Router) { }



  onLogin() {

    const email = this.loginForm.value.email;

    const password = this.loginForm.value.password;

    this.fbAuth.auth.signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
        console.log('Successfully logged in');
        this.router.navigate(['/main-menu']);
      })
      .catch(error => {
        console.error(error);
        console.log('Problem occurred on login attempt');
      });

  }

}
