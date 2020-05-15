import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-doctors-card",
  templateUrl: "./doctors-card.component.html",
  styleUrls: ["./doctors-card.component.scss"],
})
export class DoctorsCardComponent implements OnInit {
  @Input() items: any[];

  constructor(private router: Router) {}

  ngOnInit() {}

  changeToDoctor(item) {
    this.router.navigate([`/amertat/information/doctors/doctor/${item.id}`], {
      queryParams: item.id,
    });
  }
}
