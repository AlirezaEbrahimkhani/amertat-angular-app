import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss']
})
export class HospitalsComponent implements OnInit {
  hospitals: any[] = [
    {
      name: "Tehran's Central",
      description: "The biggest hospital in Tehran",
      imgSrc: "../../../../assets/pictures/hospitals/esaias-tan-JeWyWRMH4rQ-unsplash.jpg",
    },
    {
      name: "Tehran's Central",
      description: "The biggest hospital in Tehran",
      imgSrc: "../../../../assets/pictures/hospitals/esaias-tan-JeWyWRMH4rQ-unsplash.jpg",
    },
    {
      name: "Tehran's Central",
      description: "The biggest hospital in Tehran",
      imgSrc: "../../../../assets/pictures/hospitals/esaias-tan-JeWyWRMH4rQ-unsplash.jpg",
    },
    {
      name: "Tehran's Central",
      description: "The biggest hospital in Tehran",
      imgSrc: "../../../../assets/pictures/hospitals/esaias-tan-JeWyWRMH4rQ-unsplash.jpg",
    },
    {
      name: "Tehran's Central",
      description: "The biggest hospital in Tehran",
      imgSrc: "../../../../assets/pictures/hospitals/esaias-tan-JeWyWRMH4rQ-unsplash.jpg",
    },
    {
      name: "Tehran's Central",
      description: "The biggest hospital in Tehran",
      imgSrc: "../../../../assets/pictures/hospitals/esaias-tan-JeWyWRMH4rQ-unsplash.jpg",
    },
  ];

  clinics: any[] = [
    {
      name: "Tehran's Central",
      description: "The biggest clinic in Tehran",
      imgSrc: "../../../../assets/pictures/hospitals/adhy-savala-zbpgmGe27p8-unsplash.jpg",
    },
    {
      name: "Tehran's Central",
      description: "The biggest clinic in Tehran",
      imgSrc: "../../../../assets/pictures/hospitals/adhy-savala-zbpgmGe27p8-unsplash.jpg",
    },
    {
      name: "Tehran's Central",
      description: "The biggest clinic in Tehran",
      imgSrc: "../../../../assets/pictures/hospitals/adhy-savala-zbpgmGe27p8-unsplash.jpg",
    },
    {
      name: "Tehran's Central",
      description: "The biggest clinic in Tehran",
      imgSrc: "../../../../assets/pictures/hospitals/adhy-savala-zbpgmGe27p8-unsplash.jpg",
    },
    {
      name: "Tehran's Central",
      description: "The biggest clinic in Tehran",
      imgSrc: "../../../../assets/pictures/hospitals/adhy-savala-zbpgmGe27p8-unsplash.jpg",
    },
    {
      name: "Tehran's Central",
      description: "The biggest clinic in Tehran",
      imgSrc: "../../../../assets/pictures/hospitals/adhy-savala-zbpgmGe27p8-unsplash.jpg",
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
