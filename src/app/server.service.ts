import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: Http) { }
  // storeServer(server:any[]) {
  //   return this.http.post('https://httplearning-be1e8.firebaseio.com/data.json',server);
  // }
  storeServer(server:any[]) {
    return this.http.put('https://httplearning-be1e8.firebaseio.com/data.json',server);
  }

  getServer() {
    return this.http.get('https://httplearning-be1e8.firebaseio.com/data.json');
  }
}
