import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import { HeaderFooterModule } from '../header-footer/header-footer.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormlyBootstrapModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    HeaderFooterModule
  ],
  exports : [
    CommonModule,
    FormlyBootstrapModule,
    ReactiveFormsModule,
    HeaderFooterModule
  ]
})
export class SharedModule { }
