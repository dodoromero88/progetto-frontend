import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
// import { LoginService } from '@app/login/login.service';
import { UtenteService } from '../service/utente.service';
import { Utente } from '../model/utente.model';

@Injectable()
export class IsLoggedGuard implements CanActivate {
  utente: Utente;
  constructor(private utenteService: UtenteService, private router: Router) { }

  canActivate() {
    let isLoggedIn = (this.utenteService.token != null && (this.utenteService.utente && this.utenteService.utente.email != null));
    if (isLoggedIn)
      return true;
    this.router.navigate(['/']);
    return false;
  }
}