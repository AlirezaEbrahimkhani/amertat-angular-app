import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-doctor",
  templateUrl: "./doctor.component.html",
  styleUrls: ["./doctor.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class DoctorComponent implements OnInit {
  @Input() doctor: any = {
    imgSrc: "./../../../../../assets/information/doctors/doc_8.jpg",
    name: "Dr john smith",
    speciality: "Physyology",
    phone: "02433224567",
    address: "Zanjan, some avn, som num",
  };

  form = new FormGroup({});

  constructor() {}

  ngOnInit() {}

  onSubmit() {}
}
