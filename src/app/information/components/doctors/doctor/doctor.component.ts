import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { InformationService } from "src/app/information/shared/information.service";

@Component({
  selector: "app-doctor",
  templateUrl: "./doctor.component.html",
  styleUrls: ["./doctor.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class DoctorComponent implements OnInit {
  doctor: any = [];
  baseUrl = "http://195.206.106.154:3000";

  form = new FormGroup({});

  constructor(
    private activeRoute: ActivatedRoute,
    private infoSrv: InformationService
  ) {}

  ngOnInit() {
    let { id } = this.activeRoute.snapshot.params;
    this.infoSrv.getDoctor(id).subscribe((response) => {
      this.doctor = response;
    });
  }

  onSubmit() {}
}
