import { Component, OnInit } from '@angular/core';
import { Utente } from '../model/utente.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UtenteService } from '../service/utente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  utente: Utente = new Utente();
  emailColour: string;
  usernameColour: string;
  passwordColour: string;
  confermaColour: string;
  usernameLength:boolean;
  usernameString:boolean;
  passLength:boolean;
  passMinusc:boolean;
  passMaiusc:boolean;
  passSpecial:boolean;
  passNumber:boolean;
  signupFormValid:boolean = false;

  signupForm = new FormGroup({
    'email': new FormControl(this.utente.email, [Validators.required, Validators.email, Validators.minLength(5)]),
    'password': new FormControl(this.utente.password, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&#])[A-Za-z\d$@$!%*?&#].{8,}')]),
    'conferma': new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&#])[A-Za-z\d$@$!%*?&#].{8,}')])
  });

  constructor(private service:UtenteService, private router:Router){}
  ngOnInit() {}

  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get conferma() {
    return this.signupForm.get('conferma');
  }
  checkEmail(): boolean {
    if(this.signupForm.get('email') != null) {
      this.emailColour = (this.signupForm.get('email').valid) ?
      'is-valid' : 'is-invalid';
    }
    return (this.emailColour == 'is-valid');
  }
  
  checkPassword(): boolean {
    this.passLength = this.signupForm.get('password').value.length >= 8;
    this.passMaiusc = /[A-Z]/.test(this.signupForm.get('password').value);
    this.passMinusc = /[a-z]/.test(this.signupForm.get('password').value);
    this.passNumber = /\d/.test(this.signupForm.get('password').value);
    this.passSpecial = /[$@$!%*?&#]/.test(this.signupForm.get('password').value);
    this.passwordColour = (this.signupForm.get('password').valid) ?
      'is-valid' : 'is-invalid';
    return (this.passwordColour == 'is-valid');
  }
  checkConferma(): boolean {
    this.confermaColour = (this.signupForm.get('conferma').valid &&
      (this.signupForm.get('conferma').value == this.signupForm.get('password').value)) ?
      'is-valid' : 'is-invalid';
      this.signupForm.get('conferma').setErrors((this.confermaColour == 'is-invalid') ? {'incorrect': true} : null);
    return (this.confermaColour == 'is-valid');
  }
  
  signupUser(){
    this.utente.email = this.signupForm.get('email').value;
    this.utente.password = this.signupForm.get('password').value;
    console.log(this.utente.email);
    
    this.service.signup(this.utente).subscribe(response => {
      if(response && response.status == 'OK'){
        this.router.navigate(['/login']);
      }
    }, error => {
      console.log('error, ', error);
    });
  }
}
