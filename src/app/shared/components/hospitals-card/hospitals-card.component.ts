import { Component, OnInit, Input } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-hospitals-card",
  templateUrl: "./hospitals-card.component.html",
  styleUrls: ["./hospitals-card.component.scss"]
})
export class HospitalsCardComponent implements OnInit {
  @Input() items: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {}

  onChangeRoute() {
    this.router.navigate(["/amertat/information/hospitals/hospital"]);
  }
}
