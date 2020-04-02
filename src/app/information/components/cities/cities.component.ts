import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cities",
  templateUrl: "./cities.component.html",
  styleUrls: ["./cities.component.scss"]
})
export class CitiesComponent implements OnInit {
  citiesCard: any[] = [
    {
      imgSrc: "./../../../../assets/information/city/city1.jpg",
      cityName: "Zanjan",
      cityDetail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quia quibusdam? Illum minus voluptates perferendis eum nostrum voluptatem obcaecati saepe."
    },
    {
      imgSrc: "./../../../../assets/information/city/city2.jpg",
      cityName: "Tehran",
      cityDetail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quia quibusdam? Illum minus voluptates perferendis eum nostrum voluptatem obcaecati saepe."
    },
    {
      imgSrc: "./../../../../assets/information/city/city3.jpg",
      cityName: "Isfahan",
      cityDetail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quia quibusdam? Illum minus voluptates perferendis eum nostrum voluptatem obcaecati saepe."
    },
    {
      imgSrc: "./../../../../assets/information/city/city4.jpg",
      cityName: "Mashhad",
      cityDetail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quia quibusdam? Illum minus voluptates perferendis eum nostrum voluptatem obcaecati saepe."
    },
    {
      imgSrc: "./../../../../assets/information/city/city5.jpg",
      cityName: "Tabriz",
      cityDetail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quia quibusdam? Illum minus voluptates perferendis eum nostrum voluptatem obcaecati saepe."
    },
    {
      imgSrc: "./../../../../assets/information/city/city6.jpg",
      cityName: "Boshehr",
      cityDetail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quia quibusdam? Illum minus voluptates perferendis eum nostrum voluptatem obcaecati saepe."
    },
    {
      imgSrc: "./../../../../assets/information/city/city7.jpg",
      cityName: "Semnan",
      cityDetail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quia quibusdam? Illum minus voluptates perferendis eum nostrum voluptatem obcaecati saepe."
    },
    {
      imgSrc: "./../../../../assets/information/city/city8.jpg",
      cityName: "Kerman",
      cityDetail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quia quibusdam? Illum minus voluptates perferendis eum nostrum voluptatem obcaecati saepe."
    },
    {
      imgSrc: "./../../../../assets/information/city/city9.jpg",
      cityName: "Mazandaran",
      cityDetail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quia quibusdam? Illum minus voluptates perferendis eum nostrum voluptatem obcaecati saepe."
    }
  ];

  constructor() {}

  ngOnInit() {}
}
