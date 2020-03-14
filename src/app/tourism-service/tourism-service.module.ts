import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourismServiceRoutingComponent } from './components/tourism-service-routing/tourism-service-routing.component';
import { TourismServiceRoutingModule } from './tourism-service-routing.routes';
import { TourismServiceComponent } from './components/tourism-service/tourism-service.component';


@NgModule({
  declarations: [TourismServiceRoutingComponent, TourismServiceComponent],
  imports: [
    CommonModule,
    TourismServiceRoutingModule
  ]
})
export class TourismServiceModule { }
