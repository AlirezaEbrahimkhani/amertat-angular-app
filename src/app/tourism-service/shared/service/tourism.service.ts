import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class TourismService {
  baseUrl = "http://localhost:5000/api/";

  constructor(private http: HttpClient) {}

  getTourismServicePage() {
    return this.http.get(this.baseUrl + "about-tourism-page");
  }

  getAccomodationPage() {
    return this.http.get(this.baseUrl + "accomodation/active");
  }
}
