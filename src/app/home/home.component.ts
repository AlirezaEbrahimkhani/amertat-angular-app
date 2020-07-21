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
  baseUrl: string = "http://195.206.106.154:3000";
  counter: number = 0;
  pageConfig: any = [];

  blogCard: any[] = [];

  constructor(
    private router: Router,
    private siteInfoSrv: SiteInformationService,
    private homeSrv: HomeService
  ) {}

  ngOnInit() {
    this.siteInfoSrv.getBlog().subscribe((response: any[]) => {
      response.forEach((element) => {
        if (this.counter != 9) {
          this.blogCard.push(element);
          this.counter++;
        }
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
