import { Component, OnInit, Input, Output } from "@angular/core";

@Component({
  selector: "app-filter-part",
  templateUrl: "./filter-part.component.html",
  styleUrls: ["./filter-part.component.scss"]
})
export class FilterPartComponent implements OnInit {
  @Input() part: any;
  constructor() {}

  ngOnInit() {}
}
