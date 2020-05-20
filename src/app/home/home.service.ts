import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  baseUrl = "http://195.206.106.154:3000/";

  constructor(private http: HttpClient) {}

  getHomePage() {
    return this.http.get(this.baseUrl + "home-page");
  }
}
