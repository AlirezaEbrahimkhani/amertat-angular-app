import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-hospitals-card",
  templateUrl: "./hospitals-card.component.html",
  styleUrls: ["./hospitals-card.component.scss"],
})
export class HospitalsCardComponent implements OnInit {
  @Input() items: any[] = [];
  baseUrl = "http://195.206.106.154:3000";

  constructor(private router: Router) {}

  ngOnInit() {}

  onChangeRoute(item) {
    this.router.navigate(
      [`/amertat/information/hospitals/hospital/${item.id}`],
      {
        queryParams: item.id,
      }
    );
  }
}
