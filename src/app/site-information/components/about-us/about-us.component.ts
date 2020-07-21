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

  persons: any[] = [
    {
      name: "Alireza Ebrahimkhani",
      position: "Project Manager",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.",
      img: "person4.jpg",
    },
    {
      name: "Susan Williams",
      position: "Accounting Desk Person",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.",
      img: "person2.jpg",
    },
    {
      name: "John doe",
      position: "Lead Writer",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.",
      img: "person3.jpg",
    },
    {
      name: "Kate Hliznitsova",
      position: "Secretary  ",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.",
      img: "person1.jpg",
    },
  ];

  developmentTeam: any[] = [
    {
      imgSrc: "../../../../assets/contact-us/person2.jpg",
      name: "Alireza Ebrahimkhani",
      label: "Project Manager",
    },
    {
      imgSrc: "../../../../assets/contact-us/person4.jpg",
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
