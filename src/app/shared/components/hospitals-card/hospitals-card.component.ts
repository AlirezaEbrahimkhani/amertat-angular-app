import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-hospitals-card",
  templateUrl: "./hospitals-card.component.html",
  styleUrls: ["./hospitals-card.component.scss"]
})
export class HospitalsCardComponent implements OnInit {
  @Input() items: any[] = [];

  constructor() {}

  ngOnInit() {}
}
