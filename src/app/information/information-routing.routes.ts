import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InformationRoutingComponent } from "./components/information-routing/information-routing.component";
import { HospitalsComponent } from "./components/hospitals/hospitals.component";
import { DoctorsComponent } from "./components/doctors/doctors.component";
import { CitiesComponent } from "./components/cities/cities.component";
import { HospitalComponent } from "./components/hospitals/hospital/hospital.component";
import { DoctorComponent } from "./components/doctors/doctor/doctor.component";
import { CityComponent } from "./components/cities/city/city.component";

const routes: Routes = [
  {
    path: "",
    component: InformationRoutingComponent,
    children: [
      {
        path: "hospitals",
        component: HospitalsComponent,
        data: {
          breadcrumb: "بیمارستان ها"
        }
      },
      {
        path: "doctors",
        component: DoctorsComponent,
        data: {
          breadcrumb: "پزشکان ها"
        }
      },
      {
        path: "cities",
        component: CitiesComponent,
        data: {
          breadcrumb: "شهر ها"
        }
      },
      {
        path: "hospitals/hospital",
        component: HospitalComponent
      },
      {
        path: "doctors/doctor/:id",
        component: DoctorComponent
      },
      {
        path: "cities/city",
        component: CityComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationRoutingModule {}
