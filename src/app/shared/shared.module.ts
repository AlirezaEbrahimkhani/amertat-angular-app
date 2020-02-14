import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialModule } from './material.module';




@NgModule({
  declarations: [],
  imports: [
    FormlyBootstrapModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    MaterialModule
  ],
  exports : [
    FormlyBootstrapModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
    MaterialModule
  ]
})
export class SharedModule { }
