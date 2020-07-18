import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MedicalServiceService {
  baseUrl = "http://localhost:5000/api/";

  constructor(private http: HttpClient) {}

  getLiposuctionPage() {
    return this.http.get(this.baseUrl + "liposuction/active");
  }

  getHairTranspalentPage() {
    return this.http.get(this.baseUrl + "hair-transplant/active");
  }
}
