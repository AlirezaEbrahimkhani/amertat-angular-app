import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TourismServiceRoutingComponent } from './components/tourism-service-routing/tourism-service-routing.component';


const routes: Routes = [
  {
    path : "",
    component : TourismServiceRoutingComponent,
    children : []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourismServiceRoutingModule { }
