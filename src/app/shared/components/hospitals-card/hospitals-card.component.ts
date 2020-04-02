import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-hospitals-card",
  templateUrl: "./hospitals-card.component.html",
  styleUrls: ["./hospitals-card.component.scss"]
})
export class HospitalsCardComponent implements OnInit {
  @Input() items: any[] = [
    {
      name: "Shahid Beheshti",
      desctrption: "ssbthe dndne dnetbgdf gehyjr  gtge kmfgb sgbet dhnfhy dnty",
      imgSrc:
        "../../../../assets/pictures/hospitals/adhy-savala-zbpgmGe27p8-unsplash.jpg"
    },
    {
      name: "Shahid Beheshti",
      desctrption: "ssbthe dndne dnetbgdf gehyjr  gtge kmfgb sgbet dhnfhy dnty",
      imgSrc:
        "../../../../assets/pictures/hospitals/esaias-tan-JeWyWRMH4rQ-unsplash.jpg"
    },
    {
      name: "Shahid Beheshti",
      desctrption: "ssbthe dndne dnetbgdf gehyjr  gtge kmfgb sgbet dhnfhy dnty",
      imgSrc:
        "../../../../assets/pictures/hospitals/martha-dominguez-de-gouveia-nMyM7fxpokE-unsplash.jpg"
    },
    {
      name: "Shahid Beheshti",
      desctrption: "ssbthe dndne dnetbgdf gehyjr  gtge kmfgb sgbet dhnfhy dnty",
      imgSrc:
        "../../../../assets/pictures/hospitals/adhy-savala-zbpgmGe27p8-unsplash.jpg"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
