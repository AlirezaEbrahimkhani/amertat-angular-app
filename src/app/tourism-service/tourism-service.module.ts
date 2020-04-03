import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TourismServiceRoutingComponent } from "./components/tourism-service-routing/tourism-service-routing.component";
import { TourismServiceRoutingModule } from "./tourism-service-routing.routes";
import { TourismServiceComponent } from "./components/tourism-service/tourism-service.component";
import { SharedModule } from "../shared/shared.module";
import { AccommodationServiceComponent } from "./components/accommodation-service/accommodation-service.component";
import { FilterModule } from '../filter/filter.module';

@NgModule({
  declarations: [
    TourismServiceRoutingComponent,
    TourismServiceComponent,
    AccommodationServiceComponent
  ],
  imports: [CommonModule, TourismServiceRoutingModule, SharedModule , FilterModule]
})
export class TourismServiceModule {}
