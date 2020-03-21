import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TourismServiceRoutingComponent } from "./components/tourism-service-routing/tourism-service-routing.component";
import { TourismServiceRoutingModule } from "./tourism-service-routing.routes";
import { TourismServiceComponent } from "./components/tourism-service/tourism-service.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [TourismServiceRoutingComponent, TourismServiceComponent],
  imports: [CommonModule, TourismServiceRoutingModule, SharedModule]
})
export class TourismServiceModule {}
