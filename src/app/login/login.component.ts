import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtenteService } from '@app/service/utente.service';
import { Utente } from '../model/utente.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  utente: Utente = new Utente();
  constructor(private http: HttpClient, private router: Router, private utenteService: UtenteService ) { }

  ngOnInit(): void {
  }

  // Effetua l'accesso al profilo personale
  onClickAccedi(){

    console.log(this.utente);
    this.utenteService.login(this.utente.email,this.utente.password);
    // this.router.navigate(['']);
  }



}
