import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  baseUrl = "http://localhost:5000/api/";

  constructor(private http: HttpClient) {}

  getHomePage() {
    return this.http.get(this.baseUrl + "home/active");
  }

  getPopularProcedure() {
    return this.http.get(this.baseUrl + "popular-procedure")
  }
}
