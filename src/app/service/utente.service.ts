import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Utente } from '../model/utente.model';
import { environment } from '@env/environment';

@Injectable()
export class UtenteService {
  utente: Utente;
  token: string;

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    const _headers = new HttpHeaders();
    const headers = _headers.append('Authorization', 'Basic ' + btoa(email + ':' + password)).append('Content-Type', 'application/json');
    let url: string = environment.apis.utente.LOGIN;
    this.http.post<any>(url, null, { headers: headers }).subscribe(response => {
      console.log("response", response);
      this.utente = response.data as Utente;
      this.token = response.token;
      this.router.navigate(['/profile']);
    }, error => {
      console.log(error);
    });
  }
}
