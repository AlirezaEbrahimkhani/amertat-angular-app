import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialModule } from './material.module';
import { SimpleCoverComponent } from './components/simple-cover/simple-cover.component';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [SimpleCoverComponent],
  imports: [
    FormlyBootstrapModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    MaterialModule,
    CommonModule,
  ],
  exports : [
    FormlyBootstrapModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
    MaterialModule,
    SimpleCoverComponent,
  ]
})
export class SharedModule { }
