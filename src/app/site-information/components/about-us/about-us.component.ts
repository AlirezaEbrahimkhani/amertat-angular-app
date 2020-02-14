import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  Services : string[] = [
    "Accomodation",
    "Medical Appointments",
    "Transportation",
    "Guide and Translation",
    "Accomodation",
    "Medical Appointments",
    "Transportation",
    "Guide and Translation"
  ]

  Lables : string[] = [
    "First Name",
    "Last Name",
    "Phone Number",
    "Your Email",
    "Your Message",
    "Description"
  ]

  constructor() { }

  ngOnInit() {
  }

}
