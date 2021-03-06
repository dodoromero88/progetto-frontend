import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '@app/login/login.service';
import { Utente } from '@app/model/utente';

@Injectable()
export class IsLoggedGuard implements CanActivate {
  utente: Utente = null;
  constructor(private loginService: LoginService, private router: Router) { }

  canActivate() {
    let isLoggedIn = (this.loginService.token != null && (this.loginService.utente && this.loginService.utente.username != null));
    if (isLoggedIn)
      return true;
    this.router.navigate(['/']);
    return false;
  }
}