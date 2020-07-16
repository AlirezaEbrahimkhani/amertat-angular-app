import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"],
})
export class AboutUsComponent implements OnInit {
  lines: string[] = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate, iure incidunt aspernatur officiis perferendis repudiandae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate, iure incidunt aspernatur officiis perferendis repudiandae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate, iure incidunt aspernatur officiis perferendis repudiandae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate, iure incidunt aspernatur officiis perferendis repudiandae.",
  ];

  persons: string[] = [
    "person1.jpg",
    "person2.jpg",
    "person3.jpg",
    "person4.jpg",
    "person1.jpg",
    "person2.jpg",
    "person3.jpg",
    "person4.jpg",
  ];

  developmentTeam: any[] = [
    {
      imgSrc: "../../../../assets/contact-us/person4.jpg",
      name: "Alireza Ebrahimkhani",
      label: "Project Manager",
    },
    {
      imgSrc: "../../../../assets/contact-us/person2.jpg",
      name: "Josef seed",
      label: "Web Developer",
    },
    {
      imgSrc: "../../../../assets/contact-us/person3.jpg",
      name: "John Doe",
      label: "Web Developer",
    },
    {
      imgSrc: "../../../../assets/contact-us/person1.jpg",
      name: "Steve Smith",
      label: "Web Developer",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
