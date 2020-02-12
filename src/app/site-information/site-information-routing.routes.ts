import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteInformationRouringComponent } from './components/site-information-rouring/site-information-rouring.component';


const routes: Routes = [
  {
    path : "",
    component : SiteInformationRouringComponent,
    children : []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteInformationRoutingModule { }
