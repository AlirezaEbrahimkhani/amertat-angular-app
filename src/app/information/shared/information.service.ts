import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class InformationService {
  baseUrl = "http://195.206.106.154:3000/";

  constructor(private http: HttpClient) {}

  getDoctorsPage() {
    return this.http.get(this.baseUrl + "doctors-page");
  }

  getDoctors() {
    return this.http.get(this.baseUrl + "doctor");
  }

  getDoctor(id) {
    return this.http.get(this.baseUrl + "doctor/" + id);
  }
}
