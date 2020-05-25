import { Component, OnInit } from "@angular/core";
import { InformationService } from "../../shared/information.service";

@Component({
  selector: "app-hospitals",
  templateUrl: "./hospitals.component.html",
  styleUrls: ["./hospitals.component.scss"],
})
export class HospitalsComponent implements OnInit {
  pageConfig: any = [];
  hospitals: any[] = [];
  clinics: any[] = [];
  constructor(private infoService: InformationService) {}

  ngOnInit() {
    this.infoService.getHospitalsPage().subscribe((response: any[]) => {
      response.forEach((element) => {
        if (element.isActive) {
          this.pageConfig = element;
        }
      });
    });
    this.infoService.getHospitals().subscribe((response: any[]) => {
      response.map((element) => {
        this.hospitals.push({
          ...element,
          desc: element.desc.substring(0, 55),
        });
      });
    });
  }
}
