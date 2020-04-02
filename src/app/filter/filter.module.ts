import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { FilterPartComponent } from './filter-part/filter-part.component';
import { MatGridListModule, MatCardModule, MatCheckboxModule } from '@angular/material';
import { ButtonsModule, WavesModule, CollapseModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [FilterComponent, FilterPartComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatCheckboxModule,
    ButtonsModule,
    WavesModule,
    CollapseModule,
  ],
  exports: [
    FilterComponent,
  ]
})
export class FilterModule { }
