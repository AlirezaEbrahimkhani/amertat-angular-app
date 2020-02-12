import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.routes';
import { InformationRoutingComponent } from './components/information-routing/information-routing.component';


@NgModule({
  declarations: [InformationRoutingComponent],
  imports: [
    CommonModule,
    InformationRoutingModule
  ]
})
export class InformationModule { }
