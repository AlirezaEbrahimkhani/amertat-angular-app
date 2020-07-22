import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HeaderFooterService {
  baseUrl = "http://localhost:5000/api/";

  constructor(private http: HttpClient) {}

  contactUsForm(model) {
    model["feedBack"] = <number>model["feedBack"];
    return this.http.post(this.baseUrl + "contact-us", model);
  }

  getFeedbacks() {
    return this.http.get(this.baseUrl + "feedbacks");
  }
}
