import { Component, OnInit } from "@angular/core";
import { MedicalServiceService } from "../../shared/service/medical-service.service";

@Component({
  selector: "app-hair-transplant",
  templateUrl: "./hair-transplant.component.html",
  styleUrls: ["./hair-transplant.component.scss"],
})
export class HairTransplantComponent implements OnInit {
  pageConfig: any = [];

  constructor(private medicalSrv: MedicalServiceService) {}

  ngOnInit() {
    this.medicalSrv.getHairTranspalentPage().subscribe((response: any[]) => {
      this.pageConfig = response[0];
    });
  }
}
