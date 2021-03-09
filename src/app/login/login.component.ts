import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@app/service/data.service';
import { UtenteService } from '@app/service/utente.service';
import { Utente } from '../model/utente.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  utente: Utente = new Utente();
  responseSuccess: boolean = true;
  message:string;

  @Input() resMexSignup: string;
  constructor(private http: HttpClient, private router: Router, private utenteService: UtenteService, private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message);
    this.responseSuccess = this.message && this.message == 'default message';
    
  }

  // Effetua l'accesso al profilo personale
  onClickAccedi() {

    //console.log(this.utente);
    this.utenteService.login(this.utente.email, this.utente.password);
    // this.router.navigate(['']);
  }

}