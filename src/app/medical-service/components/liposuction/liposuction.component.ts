import { Component, OnInit } from "@angular/core";
import { MedicalServiceService } from "../../shared/service/medical-service.service";

@Component({
  selector: "app-liposuction",
  templateUrl: "./liposuction.component.html",
  styleUrls: ["./liposuction.component.scss"],
})
export class LiposuctionComponent implements OnInit {
  pageConfig: any = [];

  constructor(private medicalSrv: MedicalServiceService) {}

  ngOnInit() {
    this.medicalSrv.getLiposuctionPage().subscribe((response: any[]) => {
      this.pageConfig = response[0];
    });
  }
}
