import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doctors-card',
  templateUrl: './doctors-card.component.html',
  styleUrls: ['./doctors-card.component.scss']
})
export class DoctorsCardComponent implements OnInit {
  
  @Input()items : any = [
    {
      name: "Ali",
      proficiency: "Heart",
      description: "Neque porro quisquam est, qui dolorem ipsum quia dolor.",
      imgSrc: "../../../../assets/About Us/person4.jpg",
    },
    {
      name: "Ali",
      proficiency: "Heart",
      description: "Neque porro quisquam est, qui dolorem ipsum quia dolor.",
      imgSrc: "../../../../assets/About Us/person1.jpg",
    },
    {
      name: "Ali",
      proficiency: "Heart",
      description: "Neque porro quisquam est, qui dolorem ipsum quia dolor.",
      imgSrc: "../../../../assets/About Us/person2.jpg",
    },
    {
      name: "Ali",
      proficiency: "Heart",
      description: "Neque porro quisquam est, qui dolorem ipsum quia dolor.",
      imgSrc: "../../../../assets/About Us/person3.jpg",
    },
    {
      name: "Ali",
      proficiency: "Heart",
      description: "Neque porro quisquam est, qui dolorem ipsum quia dolor.",
      imgSrc: "../../../../assets/About Us/person4.jpg",
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
