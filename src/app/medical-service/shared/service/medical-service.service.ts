import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicalServiceService {

  baseUrl = "http://195.206.106.154:3000/"

  constructor(private http : HttpClient) { }

  getLiposuctionPage(){
    return this.http.get(this.baseUrl + "lisposuction-page");
  }

  getHairTranspalentPage(){
    return this.http.get(this.baseUrl + "hair-transaction-page");
  }
}
