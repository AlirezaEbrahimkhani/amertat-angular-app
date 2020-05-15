import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-doctor",
  templateUrl: "./doctor.component.html",
  styleUrls: ["./doctor.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class DoctorComponent implements OnInit {
  doctor: any = {
    imgSrc: "./../../../../../assets/information/doctors/doc_8.jpg",
    name: "Dr john smith",
    speciality: "Physyology",
    phone: "02433224567",
    address: "Zanjan, some avn, som num",
  };

  doctorSampleWork: any[] = [
    {
      name: "Light mask",
      description: "First text",
      imgSrc: "./../../../../../assets/information/doctors/sample1.jpg",
    },
    {
      name: "Strong mask",
      description: "Secondary text",
      imgSrc: "./../../../../../assets/information/doctors/sample2.jpg",
    },
    {
      name: "Slight mask",
      description: "Third text",
      imgSrc: "./../../../../../assets/information/doctors/sample3.jpg",
    },
  ];

  form = new FormGroup({});

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((element) => {
      console.log(element); //اینجا اون آی دی رو میگیری میفرستی به سرویس
    });
  }

  onSubmit() {}
}
