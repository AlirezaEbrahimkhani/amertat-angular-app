import { Component, OnInit } from "@angular/core";
import { TourismService } from "../../shared/service/tourism.service";

@Component({
  selector: "app-tourism-service",
  templateUrl: "./tourism-service.component.html",
  styleUrls: ["./tourism-service.component.scss"],
})
export class TourismServiceComponent implements OnInit {
  explanation: string = "";

  constructor(private tourismSrv: TourismService) {}

  ngOnInit() {
    this.tourismSrv.getTourismServicePage().subscribe((response: any) => {
      const { data } = response;
      this.explanation = data[0].explanation;
    });
  }
}
