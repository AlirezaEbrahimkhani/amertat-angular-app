import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MedicalServiceRoutingComponent } from "./components/medical-service-routing/medical-service-routing.component";
import { MedicalServiceRoutingModule } from "./medical-service-routing.routes";

@NgModule({
  declarations: [MedicalServiceRoutingComponent],
  imports: [CommonModule, MedicalServiceRoutingModule]
})
export class MedicalServiceModule {}
