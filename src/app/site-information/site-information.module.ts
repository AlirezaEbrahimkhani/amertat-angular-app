import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteInformationRoutingModule } from './site-information-routing.routes';
import { SiteInformationRouringComponent } from './components/site-information-rouring/site-information-rouring.component';
import { AboutUsComponent } from './components/about-us/about-us.component';


@NgModule({
  declarations: [
    SiteInformationRouringComponent, 
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    SiteInformationRoutingModule
  ]
})
export class SiteInformationModule { }
