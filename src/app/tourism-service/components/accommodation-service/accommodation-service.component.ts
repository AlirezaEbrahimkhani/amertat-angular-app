import { Component, OnInit } from "@angular/core";
import { TourismService } from "../../shared/service/tourism.service";

@Component({
  selector: "app-accommodation-service",
  templateUrl: "./accommodation-service.component.html",
  styleUrls: ["./accommodation-service.component.scss"],
})
export class AccommodationServiceComponent implements OnInit {
  pageConfig: any = [];

  constructor(private tourismSrv: TourismService) {}

  ngOnInit() {
    this.tourismSrv.getAccomodationPage().subscribe((response: any) => {
      const { data } = response;
      this.pageConfig = data[0];
    });
  }
}
