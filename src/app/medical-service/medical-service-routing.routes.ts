import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MedicalServiceRoutingComponent } from "./components/medical-service-routing/medical-service-routing.component";
import { HairTransplantComponent } from "./components/hair-transplant/hair-transplant.component";
import { LiposuctionComponent } from "./components/liposuction/liposuction.component";

const routes: Routes = [
  {
    path: "",
    component: MedicalServiceRoutingComponent,
    children: [
      {
        path: "hair-transplant",
        component: HairTransplantComponent,
        data: {
          breadcrumb: "کاشت مو"
        }
      },
      {
        path: "liposuction",
        component: LiposuctionComponent,
        data: {
          breadcrumb: "لیپوساکشن"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalServiceRoutingModule {}
