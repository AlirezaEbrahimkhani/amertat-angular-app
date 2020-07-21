import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  baseUrl = "http://localhost:5000/api/";

  constructor(private http: HttpClient) {}

  getPopularDestination() {
    return this.http.get(this.baseUrl + "popular-destination");
  }
}
