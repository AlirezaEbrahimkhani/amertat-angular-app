import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hospital",
  templateUrl: "./hospital.component.html",
  styleUrls: ["./hospital.component.scss"],
})
export class HospitalComponent implements OnInit {
  hospitalCards: any[] = [
    {
      title: "Hospital Capacity",
      description: "Lorem ipsum dolor sit, amet consectetur.",
      icon: "bed",
      titleDetail: "Bed Number",
      Number: "4000",
      detailTitle: "About Beds",
      detailDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.",
    },
    {
      title: "Hospital Palce",
      description: "Lorem ipsum dolor sit, amet consectetur.",
      icon: "map-marker-alt",
      titleDetail: "City Name",
      Number: "Tehran",
      detailTitle: "About Tehran",
      detailDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.",
    },
    {
      title: "About Doctors",
      description: "Lorem ipsum dolor sit, amet consectetur.",
      icon: "stethoscope",
      titleDetail: "Number of doctors",
      Number: "200",
      detailTitle: "About Our Doctor",
      detailDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.",
    },
    {
      title: "Hospital Equipment",
      description: "Lorem ipsum dolor sit, amet consectetur.",
      icon: "syringe",
      titleDetail: "Equipment",
      Number: "2510",
      detailTitle: "About Our Equipment",
      detailDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
