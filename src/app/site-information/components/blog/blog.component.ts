import { Component, OnInit } from "@angular/core";
import { SiteInformationService } from "../../shared/services/site-information.service";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnInit {
  blogCard: any = [];
  baseUrl = "http://localhost:5000";
  constructor(private siteInfoSrv: SiteInformationService) {}

  ngOnInit() {
    this.siteInfoSrv.getBlog().subscribe((response: any) => {
      const { data } = response;
      this.blogCard = data;
    });
  }

  onClickCard(item) {
    window.open(item.link);
  }
}
