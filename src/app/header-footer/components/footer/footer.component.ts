import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  
  menu: string[] = [
    "About US",
    "Blog",
    "Faq",
    "Packages",
    "Terms and Conditions",
    "Privacy Policy"
  ];

  procedures: string[] = [
    "Rhinoplasty",
    "Plastic Surgery",
    "Hair Transplant",
    "Dentistry",
    "Weight Loss Surgery",
    "Orthopedics",
    "Fertility Treatments",
    "ENT (Ear, Nose and Throat)"
  ];

  officialAddress: string[] = [
    "Tehran: No. 1, Azadi St, Sharif University of Technology, +9812345678",
    "London: No. 1, Azadi St, Sharif University of Technology, +9812345678",
    "Paris: No. 1, Azadi St, Sharif University of Technology, +9812345678",
    "Toronto: No. 1, Azadi St, Sharif University of Technology, +9812345678",
    "New York: No. 1, Azadi St, Sharif University of Technology, +9812345678"
  ];

  constructor() {}

  ngOnInit() {}
}
