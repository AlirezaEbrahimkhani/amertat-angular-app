import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-city",
  templateUrl: "./city.component.html",
  styleUrls: ["./city.component.scss"],
})
export class CityComponent implements OnInit {
  city: any = {
    name: "Zanjan",
    mainImsSrc: "./../../../../../assets/tourism-service/city4.jpg",
    carouselItems: [
      {
        name: "Light mask",
        description: "First text",
        imgSrc: "./../../../../../assets/pictures/others/img (6).jpg",
      },
      {
        name: "Strong mask",
        description: "Secondary text",
        imgSrc: "./../../../../../assets/pictures/others/img (9).jpg",
      },
      {
        name: "Slight mask",
        description: "Third text",
        imgSrc: "./../../../../../assets/pictures/others/img (68).jpg",
      },
    ],
  };

  services: any[] = [
    {
      title: "tourism Service One",
      description:
        "Zanjan, at the southwest of the Asian continent, is a city blessedwith an incredible historical background, culture, and peace of mind.While you are visiting Iran for fertility, eye surgery, cosmetic surgery, or any other affordable medical treatment, why not take advantage of all that Shiraz has to offer?",
    },
    {
      title: "tourism Service Two",
      description:
        "Zanjan, at the southwest of the Asian continent, is a city blessedwith an incredible historical background, culture, and peace of mind.While you are visiting Iran for fertility, eye surgery, cosmetic surgery, or any other affordable medical treatment, why not take advantage of all that Shiraz has to offer?",
    },
    {
      title: "tourism Service Three",
      description:
        "Zanjan, at the southwest of the Asian continent, is a city blessedwith an incredible historical background, culture, and peace of mind.While you are visiting Iran for fertility, eye surgery, cosmetic surgery, or any other affordable medical treatment, why not take advantage of all that Shiraz has to offer?",
    },
    {
      title: "tourism Service Four",
      description:
        "Zanjan, at the southwest of the Asian continent, is a city blessedwith an incredible historical background, culture, and peace of mind.While you are visiting Iran for fertility, eye surgery, cosmetic surgery, or any other affordable medical treatment, why not take advantage of all that Shiraz has to offer?",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
