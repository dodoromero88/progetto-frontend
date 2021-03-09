import { Component, OnInit } from '@angular/core';
import { Utente } from '@app/model/utente.model';
import { UtenteService } from '@app/service/utente.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isAdmin: boolean = false;
  utente: Utente;
  constructor(private utenteService: UtenteService) { }

  ngOnInit(): void {
    this.utente = this.utenteService.utente;
    this.isAdmin = this.utente && this.utente.email && this.utente.role == 'admin';
  }

}
