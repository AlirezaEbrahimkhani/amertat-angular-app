import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"]
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
    let result = 0;
    for (let city of this.cities) {
      if (city == item.city) {
        result++;
        break;
      }
    }
    for (let type of this.types) {
      if (type == item.type) {
        result++;
        break;
      }
    }
    if (result == 2) return true;
    else return false;
  }

  filterByCity(checked, item) {
    if (checked.checked) this.cities.push(item);
    else if (!checked.checked) {
      this.cities.forEach((element, index) => {
        if (element == item) this.cities.splice(index, 1);
      });
    }
    this.parts = [];
    this.fullParts.forEach(element => {
      if (this.filter(element)) this.parts.push(element);
    });
  }
  filterByType(checked, item) {
    if (checked.checked) this.types.push(item);
    else if (!checked.checked) {
      this.types.forEach((element, index) => {
        if (element == item) this.types.splice(index, 1);
      });
    }
    this.parts = [];
    this.fullParts.forEach(element => {
      if (this.filter(element)) this.parts.push(element);
    });
  }
}
