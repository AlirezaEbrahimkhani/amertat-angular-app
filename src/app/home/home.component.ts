import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  imgSrc: string = "./../../assets/home/header3.jpg";
  title: string = "Amertat Medical Tourism is the best place for treatment";

  blogPostNumber: string[] = ["One", "Two", "Three", "Four", "Five", "Six"];

  constructor(private router: Router) {}

  ngOnInit() {}

  changeRoute() {
    this.router.navigate(["/amertat/site-information/contact-us"]);
  }

  onClickCard() {
    window.open("https://www.health.harvard.edu/blog/");
  }
}
