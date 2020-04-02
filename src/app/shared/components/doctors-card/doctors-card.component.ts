import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-doctors-card",
  templateUrl: "./doctors-card.component.html",
  styleUrls: ["./doctors-card.component.scss"]
})
export class DoctorsCardComponent implements OnInit {
  @Input() items: any[];

  constructor() {}

  ngOnInit() {}
}
