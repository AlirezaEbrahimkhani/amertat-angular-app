import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteInformationRoutingModule } from './site-information-routing.routes';
import { SiteInformationRouringComponent } from './components/site-information-rouring/site-information-rouring.component';


@NgModule({
  declarations: [SiteInformationRouringComponent],
  imports: [
    CommonModule,
    SiteInformationRoutingModule
  ]
})
export class SiteInformationModule { }
