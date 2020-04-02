import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MedicalServiceRoutingComponent } from "./components/medical-service-routing/medical-service-routing.component";
import { MedicalServiceRoutingModule } from "./medical-service-routing.routes";
import { LiposuctionComponent } from './components/liposuction/liposuction.component';
import { HairTransplantComponent } from './components/hair-transplant/hair-transplant.component';

@NgModule({
  declarations: [MedicalServiceRoutingComponent, LiposuctionComponent, HairTransplantComponent],
  imports: [CommonModule, MedicalServiceRoutingModule]
})
export class MedicalServiceModule {}
