import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"]
})
export class AboutUsComponent implements OnInit {
  lines: string[] = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate, iure incidunt aspernatur officiis perferendis repudiandae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate, iure incidunt aspernatur officiis perferendis repudiandae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate, iure incidunt aspernatur officiis perferendis repudiandae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate, iure incidunt aspernatur officiis perferendis repudiandae."
  ];

  constructor() {}

  ngOnInit() {}
}
