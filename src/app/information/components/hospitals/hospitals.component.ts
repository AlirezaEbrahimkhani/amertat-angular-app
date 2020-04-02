import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hospitals",
  templateUrl: "./hospitals.component.html",
  styleUrls: ["./hospitals.component.scss"]
})
export class HospitalsComponent implements OnInit {
  hospitals: any[] = [
    {
      name: "Tehran's Central",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imgSrc: "../../../../assets/information/hospital/hospital1.jpg"
    },
    {
      name: "Tehran's Central",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imgSrc: "../../../../assets/information/hospital/hospital2.jpg"
    },
    {
      name: "Tehran's Central",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imgSrc: "../../../../assets/information/hospital/hospital3.jpg"
    },
    {
      name: "Tehran's Central",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imgSrc: "../../../../assets/information/hospital/hospital4.jpg"
    },
    {
      name: "Tehran's Central",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imgSrc: "../../../../assets/information/hospital/hospital5.jpg"
    },
    {
      name: "Tehran's Central",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imgSrc: "../../../../assets/information/hospital/hospital6.jpg"
    },

    {
      name: "Tehran's Central",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imgSrc: "../../../../assets/information/hospital/hospital7.jpg"
    },
    {
      name: "Tehran's Central",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imgSrc: "../../../../assets/information/hospital/hospital8.jpg"
    },
    {
      name: "Tehran's Central",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imgSrc: "../../../../assets/information/hospital/hospital9.jpg"
    }
  ];

  clinics: any[] = [
    {
      name: "Tehran's Central",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam debitis reprehenderit assumenda recusandae aliquid quo?",
      imgSrc: "../../../../assets/information/hospital/hospital1.jpg"
    },
    {
      name: "Tehran's Central",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam debitis reprehenderit assumenda recusandae aliquid quo?",
      imgSrc: "../../../../assets/information/hospital/hospital2.jpg"
    },
    {
      name: "Tehran's Central",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam debitis reprehenderit assumenda recusandae aliquid quo?",
      imgSrc: "../../../../assets/information/hospital/hospital3.jpg"
    },
    {
      name: "Tehran's Central",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam debitis reprehenderit assumenda recusandae aliquid quo?",
      imgSrc: "../../../../assets/information/hospital/hospital4.jpg"
    },
    {
      name: "Tehran's Central",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam debitis reprehenderit assumenda recusandae aliquid quo?",
      imgSrc: "../../../../assets/information/hospital/hospital5.jpg"
    },
    {
      name: "Tehran's Central",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam debitis reprehenderit assumenda recusandae aliquid quo?",
      imgSrc: "../../../../assets/information/hospital/hospital6.jpg"
    },
    {
      name: "Tehran's Central",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam debitis reprehenderit assumenda recusandae aliquid quo?",
      imgSrc: "../../../../assets/information/hospital/hospital7.jpg"
    },
    {
      name: "Tehran's Central",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam debitis reprehenderit assumenda recusandae aliquid quo?",
      imgSrc: "../../../../assets/information/hospital/hospital8.jpg"
    },
    {
      name: "Tehran's Central",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam debitis reprehenderit assumenda recusandae aliquid quo?",
      imgSrc: "../../../../assets/information/hospital/hospital9.jpg"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
