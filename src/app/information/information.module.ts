import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.routes';
import { InformationRoutingComponent } from './components/information-routing/information-routing.component';
import { HospitalsComponent } from './components/hospitals/hospitals.component';
import { HospitalComponent } from './components/hospitals/hospital/hospital.component';


@NgModule({
  declarations: [InformationRoutingComponent, HospitalsComponent, HospitalComponent],
  imports: [
    CommonModule,
    InformationRoutingModule
  ]
})
export class InformationModule { }
