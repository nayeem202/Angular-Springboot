import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdvertisingService {

  constructor(private http: HttpClient) { }


  getAdvertisingById(id:any){
    let header = {
      "Content-Type": "application/json"
    };
    return this.http.get('http://localhost:9092/getAddvertising/'+id, {headers: header});

  }


}
