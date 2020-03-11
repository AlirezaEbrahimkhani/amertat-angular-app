import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"]
})
export class AboutUsComponent implements OnInit {
  lines: string[] = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate, iure incidunt aspernatur officiis perferendis repudiandae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate, iure incidunt aspernatur officiis perferendis repudiandae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate, iure incidunt aspernatur officiis perferendis repudiandae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate, iure incidunt aspernatur officiis perferendis repudiandae."
  ];

  persons : string[] = [
    "person1.jpg",
    "person2.jpg",
    "person3.jpg",
    "person4.jpg",
    "person1.jpg",
    "person2.jpg",
    "person3.jpg",
    "person4.jpg",
  ]

  constructor() {}

  ngOnInit() {}
}
