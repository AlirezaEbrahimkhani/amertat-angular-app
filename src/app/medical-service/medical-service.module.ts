import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MedicalServiceRoutingComponent } from "./components/medical-service-routing/medical-service-routing.component";
import { MedicalServiceRoutingModule } from "./medical-service-routing.routes";
import { LiposuctionComponent } from "./components/liposuction/liposuction.component";
import { HairTransplantComponent } from "./components/hair-transplant/hair-transplant.component";
import { SharedModule } from "../shared/shared.module";
import { FilterModule } from "../filter/filter.module";

@NgModule({
  declarations: [
    MedicalServiceRoutingComponent,
    LiposuctionComponent,
    HairTransplantComponent
  ],
  imports: [
    CommonModule,
    MedicalServiceRoutingModule,
    SharedModule,
    FilterModule
  ]
})
export class MedicalServiceModule {}
