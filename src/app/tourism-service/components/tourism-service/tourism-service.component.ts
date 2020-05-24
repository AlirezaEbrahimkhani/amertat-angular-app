import { Component, OnInit } from "@angular/core";
import { TourismService } from "../../shared/service/tourism.service";

@Component({
  selector: "app-tourism-service",
  templateUrl: "./tourism-service.component.html",
  styleUrls: ["./tourism-service.component.scss"],
})
export class TourismServiceComponent implements OnInit {
  pageConfig: any = [];

  constructor(private tourismSrv: TourismService) {}

  ngOnInit() {
    this.tourismSrv.getTourismServicePage().subscribe((response: any[]) => {
      response.forEach((element) => {
        if (element.isActive) {
          this.pageConfig = element;
        }
      });
    });
  }
}
