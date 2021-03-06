import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utente } from '../model/utente.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  utente: Utente = new Utente();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // Effetua l'accesso al profilo personale
  onClickAccedi(){

    console.log(this.utente);
    

    this.router.navigate(['']);
  }

  onClickRegistrati(){
    this.router.navigate(['signup']);
  }

}
