import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormlyBootstrapModule,
    ReactiveFormsModule,
    FormlyModule.forRoot()
  ],
  exports : [
    CommonModule,
    FormlyBootstrapModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
