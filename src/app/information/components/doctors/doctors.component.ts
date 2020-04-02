import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-doctors",
  templateUrl: "./doctors.component.html",
  styleUrls: ["./doctors.component.scss"]
})
export class DoctorsComponent implements OnInit {
  doctors: any[] = [
    {
      name: "Dr. John Dow",
      proficiency: "Health",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae debitis voluptas enim impedit ipsum.",
      imgSrc: "./../../../../assets/information/doctors/doctor1.jpg",
      degree: "Assistance Professor"
    },
    {
      name: "Dr. John Dow",
      proficiency: "Health",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae debitis voluptas enim impedit ipsum.",
      imgSrc: "./../../../../assets/information/doctors/doctor2.jpg",
      degree: "Assistance Professor"
    },
    {
      name: "Dr. John Dow",
      proficiency: "Health",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae debitis voluptas enim impedit ipsum.",
      imgSrc: "./../../../../assets/information/doctors/doctor3.jpg",
      degree: "Assistance Professor"
    },
    {
      name: "Dr. John Dow",
      proficiency: "Health",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae debitis voluptas enim impedit ipsum.",
      imgSrc: "./../../../../assets/information/doctors/doctor4.jpg",
      degree: "Assistance Professor"
    },
    {
      name: "Dr. John Dow",
      proficiency: "Health",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae debitis voluptas enim impedit ipsum.",
      imgSrc: "./../../../../assets/information/doctors/doctor5.jpg",
      degree: "Assistance Professor"
    },
    {
      name: "Dr. John Dow",
      proficiency: "Health",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae debitis voluptas enim impedit ipsum.",
      imgSrc: "./../../../../assets/information/doctors/doctor6.jpg",
      degree: "Assistance Professor"
    },
    {
      name: "Dr. John Dow",
      proficiency: "Health",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae debitis voluptas enim impedit ipsum.",
      imgSrc: "./../../../../assets/information/doctors/doctor7.jpg",
      degree: "Assistance Professor"
    },
    {
      name: "Dr. John Dow",
      proficiency: "Health",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae debitis voluptas enim impedit ipsum.",
      imgSrc: "./../../../../assets/information/doctors/doctor8.jpg",
      degree: "Assistance Professor"
    },
    {
      name: "Dr. John Dow",
      proficiency: "Health",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae debitis voluptas enim impedit ipsum.",
      imgSrc: "./../../../../assets/information/doctors/doctor9.jpg",
      degree: "Assistance Professor"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
