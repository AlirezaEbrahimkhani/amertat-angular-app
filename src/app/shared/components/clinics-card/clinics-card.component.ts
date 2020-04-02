import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-clinics-card",
  templateUrl: "./clinics-card.component.html",
  styleUrls: ["./clinics-card.component.scss"]
})
export class ClinicsCardComponent implements OnInit {
  @Input() clinicsItem: any[] = [];

  socialMediaIcon: any[] = ["fa-dribbble", "fa-twitter", "fa-facebook-f"];

  constructor() {}

  ngOnInit() {}
}
