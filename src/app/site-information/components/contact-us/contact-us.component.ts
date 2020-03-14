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

  constructor() {}

  ngOnInit() {}
}
