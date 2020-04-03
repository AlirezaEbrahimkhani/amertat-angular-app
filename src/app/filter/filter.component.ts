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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta accusamus deserunt repellat omnis vel ipsam earum inventore iusto perferendis."
    },
    {
      id: 2,
      type: "Hotel",
      city: "Zanjan",
      hotel: "Hotel",
      price: "10000$",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta accusamus deserunt repellat omnis vel ipsam earum inventore iusto perferendis."
    },
    {
      id: 3,
      type: "Hotel",
      city: "Tehran",
      hotel: "Hotel",
      price: "10000$",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta accusamus deserunt repellat omnis vel ipsam earum inventore iusto perferendis."
    },
    {
      id: 4,
      type: "Hotel",
      city: "Zanjan",
      hotel: "Hotel",
      price: "10000$",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta accusamus deserunt repellat omnis vel ipsam earum inventore iusto perferendis."
    },
    {
      id: 5,
      type: "Hospital",
      city: "Zanjan",
      hotel: "Hotel",
      price: "10000$",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta accusamus deserunt repellat omnis vel ipsam earum inventore iusto perferendis."
    },
    {
      id: 6,
      type: "Hospital",
      city: "Mashhad",
      hotel: "Hotel",
      price: "10000$",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta accusamus deserunt repellat omnis vel ipsam earum inventore iusto perferendis."
    },
    {
      id: 7,
      type: "Hotel",
      city: "Semnan",
      hotel: "Hotel",
      price: "10000$",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta accusamus deserunt repellat omnis vel ipsam earum inventore iusto perferendis."
    },
    {
      id: 8,
      type: "Hospital",
      city: "Tehran",
      hotel: "Hotel",
      price: "10000$",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta accusamus deserunt repellat omnis vel ipsam earum inventore iusto perferendis."
    },
    {
      id: 9,
      type: "Hospital",
      city: "Tabriz",
      hotel: "Hotel",
      price: "10000$",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta accusamus deserunt repellat omnis vel ipsam earum inventore iusto perferendis."
    }
  ];
  @Input() fullCities: Array<any> = ["Tehran", "Zanjan", "Mashhad", "Tabriz"];
  @Input() fullTypes: Array<any> = ["Hotel", "Restaurant", "Hospital"];

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
    } else {
      this.fullParts.forEach(element => {
        if (element.city == item || element.type == item)
          this.parts.push(element);
      });
    }
  }
}
