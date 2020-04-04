import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  @Input() city: any = {
    name: "Zanjan",
    mainImsSrc: "../../../../../assets/tourism-service/city4.jpg",
    carouselItems : [
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
  }

  constructor() { }

  ngOnInit() {
  }

}
