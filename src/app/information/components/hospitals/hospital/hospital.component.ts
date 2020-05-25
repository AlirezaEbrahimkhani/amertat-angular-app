import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { InformationService } from "src/app/information/shared/information.service";

@Component({
  selector: "app-hospital",
  templateUrl: "./hospital.component.html",
  styleUrls: ["./hospital.component.scss"],
})
export class HospitalComponent implements OnInit {
  hospitalCards: any[] = [];
  services: any[] = [];
  hospital: any = [];
  constructor(
    private activeRoute: ActivatedRoute,
    private infoSrv: InformationService
  ) {}

  ngOnInit() {
    let { id } = this.activeRoute.snapshot.params;
    this.infoSrv.getHospital(id).subscribe((response: any) => {
      let { sevices } = response;
      this.hospital = response;
      this.services = sevices;
      this.hospitalCards = [
        {
          title: "Hospital Capacity",
          description: "One way to develop the hospital capacity",
          icon: "bed",
          titleDetail: "Bed Number",
          Number: response.bedCount,
          detailTitle: "About Beds",
          detailDesc: response.aboutBeds,
        },
        {
          title: "Hospital Palce",
          description: "Hsopital should be in the calm place in city",
          icon: "map-marker-alt",
          titleDetail: response.cityName,
          Number: response.cityName,
          detailTitle: "About " + response.cityName,
          detailDesc: response.aboutCity,
        },
        {
          title: "About Doctors",
          description:
            "Hospital doctors examine, diagnose and treat patients who've been referred to the hospital by GPs and other health professionals",
          icon: "stethoscope",
          titleDetail: "Number Of Doctors",
          Number: response.doctorCount,
          detailTitle: "About Our Doctor",
          detailDesc: response.aboutDoctors,
        },
        {
          title: "Hospital Equipment",
          description:
            "Help assure excellent patient care by outfitting your facility with the right clinic and hospital supplies & equipment.",
          icon: "syringe",
          titleDetail: "Equipment",
          Number: response.equipmentCount,
          detailTitle: "About Our Equipment",
          detailDesc: response.aboutEquipment,
        },
      ];
    });
  }
}
