import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformationRoutingComponent } from './components/information-routing/information-routing.component';


const routes: Routes = [
  {
    path : "",
    component : InformationRoutingComponent,
    children :[]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationRoutingModule { }
