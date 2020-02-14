import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteInformationRouringComponent } from './components/site-information-rouring/site-information-rouring.component';
import { AboutUsComponent } from './components/about-us/about-us.component';


const routes: Routes = [
  {
    path : "",
    component : SiteInformationRouringComponent,
    children : [
      {
        path : "about-us",
        component : AboutUsComponent,
        data : {
          breadcrumb : "درباره ما"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteInformationRoutingModule { }
