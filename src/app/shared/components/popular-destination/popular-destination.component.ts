import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-popular-destination",
  templateUrl: "./popular-destination.component.html",
  styleUrls: ["./popular-destination.component.scss"]
})
export class PopularDestinationComponent implements OnInit {
  cardNumber: string[] = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight"
  ];

  constructor() {}

  ngOnInit() {}
}
