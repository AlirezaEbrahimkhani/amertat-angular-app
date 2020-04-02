import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"]
})
export class ContactUsComponent implements OnInit {
  feedBacks: string[] = [
    "haji namosan karet doroste = 5",
    "haji karet doroste = 4",
    "haji karet okeye = 3",
    "haji karet yekam gir dare = 2",
    "haji razi nistam = 1",
    "haji namosan gand zadi = 0"
  ];

  developmentTeam: any[] = [
    {
      imgSrc: "../../../../assets/contact-us/person4.jpg",
      name: "parham ghasemloo",
      label: "Project Manager"
    },
    {
      imgSrc: "../../../../assets/contact-us/person2.jpg",
      name: "Alireza Ebrahimkhani",
      label: "Web Developer"
    },
    {
      imgSrc: "../../../../assets/contact-us/person3.jpg",
      name: "Alireza Yousefi Amiri",
      label: "Web Developer"
    },
    {
      imgSrc: "../../../../assets/contact-us/person1.jpg",
      name: "Steve Smith",
      label: "Web Developer"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
