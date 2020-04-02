import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-cities-card",
  templateUrl: "./cities-card.component.html",
  styleUrls: ["./cities-card.component.scss"]
})
export class CitiesCardComponent implements OnInit {
  @Input() citiesCardInfo: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {}

  changeToCity() {
    this.router.navigate(["/amertat/information/cities/city"]);
  }
}
