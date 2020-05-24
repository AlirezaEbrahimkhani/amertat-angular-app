import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HeaderFooterService {
  baseUrl = "http://195.206.106.154:3000/";

  constructor(private http: HttpClient) {}

  contactUsForm(model) {
    model["feedBack"] = <number>model["feedBack"];
    return this.http.post(this.baseUrl + "contact-us", model);
  }
}
