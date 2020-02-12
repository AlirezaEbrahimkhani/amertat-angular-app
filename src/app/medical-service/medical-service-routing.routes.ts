import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicalServiceRoutingComponent } from './components/medical-service-routing/medical-service-routing.component';


const routes: Routes = [
  {
    path : "",
    component : MedicalServiceRoutingComponent,
    children : []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalServiceRoutingModule { }
