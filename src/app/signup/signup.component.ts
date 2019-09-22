import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private fb: FormBuilder, private fbAuth: AngularFireAuth, private router: Router) { }


  onSignup() {
    const email = this.signupForm.value.email;

    const password = this.signupForm.value.password;

    this.fbAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
        console.log('Successfully signed up');
        this.router.navigate(['/login']);
      })
      .catch(error => {
        console.error(error);
        console.log('Problem occurred in sign up attempt');
      });

  }

}
