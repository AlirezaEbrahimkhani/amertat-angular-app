import { Component, OnInit } from "@angular/core";
import { SiteInformationService } from "../../shared/services/site-information.service";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnInit {
  blogCard: any = [];
  baseUrl = "http://195.206.106.154:3000";
  constructor(private siteInfoSrv: SiteInformationService) {}

  ngOnInit() {
    this.siteInfoSrv.getBlog().subscribe((response: any[]) => {
      response.forEach((element) => {
        this.blogCard.push(element);
      });
    });
  }

  onClickCard(item) {
    window.open(item.link);
  }
}
