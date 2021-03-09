import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable()
export class PrenotazioneService {

  constructor(private http: HttpClient) { }

  booking(): Observable<any> {
    const _headers = new HttpHeaders();
    return this.http.get<any>(environment.apis.booking.GETALL, { headers: _headers.append('Content-Type', 'application/json')});
  }
}
