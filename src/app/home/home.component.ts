import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SiteInformationService } from "../site-information/shared/services/site-information.service";
import { HomeService } from "./home.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  imgSrc: string = "./../../assets/home/header3.jpg";
  title: string = "Amertat Medical Tourism is the best place for treatment";
  baseUrl: string = "http://localhost:5000";
  counter: number = 0;
  pageConfig: any = [];

  popularProcedure: any[] = [];

  constructor(private router: Router, private homeSrv: HomeService) {}

  ngOnInit() {
    this.homeSrv.getPopularProcedure().subscribe((response: any) => {
      const { data } = response;
      data.slice(0, 9).map((item, i) => {
        this.popularProcedure.push(item);
      });
    });

    this.homeSrv.getHomePage().subscribe((response: any) => {
      const { data } = response;
      this.pageConfig = data[0];
    });
  }

  changeRoute() {
    this.router.navigate(["/amertat/site-information/about-us"]);
  }

  onClickCard(item) {
    window.open(item.link);
  }
}
