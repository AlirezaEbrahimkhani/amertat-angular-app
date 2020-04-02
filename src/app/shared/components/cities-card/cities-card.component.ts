import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-cities-card",
  templateUrl: "./cities-card.component.html",
  styleUrls: ["./cities-card.component.scss"]
})
export class CitiesCardComponent implements OnInit {
  @Input() citiesCardInfo: any[] = [];

  constructor() {}

  ngOnInit() {}
}
