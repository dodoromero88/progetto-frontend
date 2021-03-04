import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  prova: string = 'Ciao';

  testInput: string = 'test';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickVaiAllaLogin(){
    this.router.navigate(['login']);
  }

}
