import { Component, OnInit } from "@angular/core";
import { SiteInformationService } from "../../shared/services/site-information.service";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"],
})
export class AboutUsComponent implements OnInit {
  persons: any[] = [];

  developmentTeam: any[] = [];

  constructor(private siteInfoSrv: SiteInformationService) {}

  ngOnInit() {
    this.siteInfoSrv.getTeams().subscribe((response: any) => {
      const { data } = response;
      this.persons = data;
    });

    this.siteInfoSrv.getDevelopers().subscribe((response: any) => {
      const { data } = response;
      this.developmentTeam = data;
    });
  }
}
