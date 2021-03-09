import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bookings } from '@app/model/bookings.model';
import { PrenotazioneService } from '@app/service/prenotazione.service';

@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css']
})
export class PrenotazioneComponent implements OnInit {
  bookings:Date[] = [];
  date: Date = new Date();
  datePickerDate: Date;
  datePickerTime: Date;
  errorPrenotazione: boolean = false;
  successPrenotazione: boolean =false;
  
  constructor(private prenotazione:PrenotazioneService) { }

  ngOnInit(): void {
    this.prenotazione.booking().subscribe(response => {
      for(let d of response){
        this.bookings.push(new Date(d))
      }
    }, error =>{
       console.log(error);
       
    });
  }

  onInputDatePicker(){
      console.log('date:', this.date);
      
  }

  onClickPrenotazione(){
    let year: number = this.datePickerDate.getFullYear();
    let day: number = this.datePickerDate.getDate();
    let months: number = this.datePickerDate.getMonth();
    let hours: number = this.datePickerTime.getHours();
    let minutes: number = this.datePickerTime.getMinutes();
    let booking: Date = new Date(year,months,day,hours,minutes);

    console.log("bookins:", this.bookings);
    console.log("booking:", booking);
    for(let b of this.bookings) {
      console.log("oggetti bookings:", b);
      
        if(b.getTime() == booking.getTime()){
          this.errorPrenotazione = true;
          break;
        }
        else 
          this.errorPrenotazione = false;
    }
    this.successPrenotazione = !this.errorPrenotazione;
    console.log('dateDate:', this.datePickerDate);
    console.log('dateTime:', this.datePickerTime);

  }

}
