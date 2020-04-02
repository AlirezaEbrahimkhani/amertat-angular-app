import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  doctors: any[] = [
    {
      name: "alireza yoosefi",
      proficiency: "Health",
      description: "More than 10 years exprience and ...",
      imgSrc: "../../../../assets/About Us/person4.jpg",
      degree: "09998883434",
    },
    {
      name: "alireza yoosefi",
      proficiency: "Health",
      description: "More than 10 years exprience and ...",
      imgSrc: "../../../../assets/About Us/person4.jpg",
      degree: "09998883434",
    },
    {
      name: "alireza yoosefi",
      proficiency: "Health",
      description: "More than 10 years exprience and ...",
      imgSrc: "../../../../assets/About Us/person4.jpg",
      degree: "09998883434",
    },
    {
      name: "alireza yoosefi",
      proficiency: "Health",
      description: "More than 10 years exprience and ...",
      imgSrc: "../../../../assets/About Us/person4.jpg",
      degree: "09998883434",
    },
    {
      name: "alireza yoosefi",
      proficiency: "Health",
      description: "More than 10 years exprience and ...",
      imgSrc: "../../../../assets/About Us/person4.jpg",
      degree: "09998883434",
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
