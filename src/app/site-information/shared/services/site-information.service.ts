import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SiteInformationService {
  baseUrl = "http://localhost:5000/api/";

  constructor(private http: HttpClient) {}

  getBlog() {
    return this.http.get(this.baseUrl + "blog");
  }

  getTeams() {
    return this.http.get(this.baseUrl + "team");
  }

  getDevelopers() {
    return this.http.get(this.baseUrl + "developers");
  }
}
