import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TourismServiceRoutingComponent } from "./components/tourism-service-routing/tourism-service-routing.component";
import { TourismServiceComponent } from "./components/tourism-service/tourism-service.component";
import { AccommodationServiceComponent } from "./components/accommodation-service/accommodation-service.component";

const routes: Routes = [
  {
    path: "",
    component: TourismServiceRoutingComponent,
    children: [
      {
        path: "tourism-services",
        component: TourismServiceComponent,
        data: {
          breadcrumb: "خدمات گردشگری"
        }
      },
      {
        path: "accommodation-services",
        component: AccommodationServiceComponent,
        data: {
          breadcrumb: "خدمات اسکان"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourismServiceRoutingModule {}
