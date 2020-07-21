import { Component, OnInit } from "@angular/core";
import { SharedService } from "../../services/shared.service";

@Component({
  selector: "app-popular-destination",
  templateUrl: "./popular-destination.component.html",
  styleUrls: ["./popular-destination.component.scss"],
})
export class PopularDestinationComponent implements OnInit {
  cardInfo: any[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.getPopularDestination().subscribe((response: any) => {
      this.cardInfo = response.data;
    });
  }
}
