import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() items : any[] = [
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
  ];
  constructor() { }

  ngOnInit() {
  }

}
