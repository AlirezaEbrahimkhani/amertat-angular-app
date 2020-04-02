import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {
  parts: Array<any> = [];
  cities: Array<string> = [];
  types: Array<string> = [];

  @Input() fullParts: Array<any> = [
    {
      id: 1,
      type: "Restaurant",
      city: "Tehran",
      hotel: "Hotel",
      price: "10000$",
      text:
        "hello hello hello hello hello hello hello hello hello hello hello hello hello "
    },
    {
      id: 2,
      type: "Hotel",
      city: "Zanjan",
      hotel: "Hotel",
      price: "10000$",
      text:
        "hello hello hello hello hello hello hello hello hello hello hello hello hello "
    },
    {
      id: 3,
      type: "Hotel",
      city: "Tehran",
      hotel: "Hotel",
      price: "10000$",
      text:
        "hello hello hello hello hello hello hello hello hello hello hello hello hello "
    },
    {
      id: 4,
      type: "Hotel",
      city: "Zanjan",
      hotel: "Hotel",
      price: "10000$",
      text:
        "hello hello hello hello hello hello hello hello hello hello hello hello hello "
    }
  ];
  @Input() fullCities: Array<any> = ["Tehran", "Zanjan"];
  @Input() fullTypes: Array<any> = ["Hotel", "Restaurant"];

  constructor() {}

  ngOnInit() {
    this.parts = Object.assign([], this.fullParts);
    this.cities = Object.assign([], this.fullCities);
    this.types = Object.assign([], this.fullTypes);
  }

  filter(item) {
    this.parts = [];
    if (item == "all") {
      this.fullParts.forEach(element => {
        this.parts.push(element);
      });
    }
    else{
      this.fullParts.forEach(element => {
        if(element.city == item || element.type == item) this.parts.push(element);
      });
    }    
  }
}
