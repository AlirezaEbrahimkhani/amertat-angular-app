import { Component, OnInit } from "@angular/core";
import { InformationService } from "../../shared/information.service";

@Component({
  selector: "app-doctors",
  templateUrl: "./doctors.component.html",
  styleUrls: ["./doctors.component.scss"],
})
export class DoctorsComponent implements OnInit {
  pageConfig: any = [];

  doctors: any[] = [];

  constructor(private infoService: InformationService) {}

  ngOnInit() {
    this.infoService.getDoctorsPage().subscribe((response: any[]) => {
      response.forEach((element) => {
        if (element.isActive) {
          this.pageConfig = element;
        }
      });
    });

    this.infoService.getDoctors().subscribe((response: any[]) => {
      response.forEach((element) => {
        this.doctors.push(element);
      });
    });
  }
}
