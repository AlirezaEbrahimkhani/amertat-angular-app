import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-clinics-card",
  templateUrl: "./clinics-card.component.html",
  styleUrls: ["./clinics-card.component.scss"],
})
export class ClinicsCardComponent implements OnInit {
  @Input() clinicsItem: any[] = [];

  socialMediaIcon: any[] = ["fa-dribbble", "fa-twitter", "fa-facebook-f"];

  constructor(private router: Router) {}

  ngOnInit() {}

  onChangeRoute() {
    this.router.navigate(["/amertat/information/hospitals/hospital"]);
  }
}
