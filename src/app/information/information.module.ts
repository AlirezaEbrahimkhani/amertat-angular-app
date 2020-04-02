import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.routes';
import { InformationRoutingComponent } from './components/information-routing/information-routing.component';
import { HospitalsComponent } from './components/hospitals/hospitals.component';
import { HospitalComponent } from './components/hospitals/hospital/hospital.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { DoctorComponent } from './components/doctors/doctor/doctor.component';
import { CitiesComponent } from './components/cities/cities.component';
import { CityComponent } from './components/cities/city/city.component';


@NgModule({
  declarations: [InformationRoutingComponent, HospitalsComponent, HospitalComponent, DoctorsComponent, DoctorComponent, CitiesComponent, CityComponent],
  imports: [
    CommonModule,
    InformationRoutingModule
  ]
})
export class InformationModule { }
