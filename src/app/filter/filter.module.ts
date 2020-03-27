import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { FilterPartComponent } from './filter-part/filter-part.component';
import { MatGridListModule, MatGridTile, MatCard, MatCardModule, MatCheckboxModule } from '@angular/material';



@NgModule({
  declarations: [FilterComponent, FilterPartComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatCheckboxModule,
  ],
  exports: [
    FilterComponent,
  ]
})
export class FilterModule { }
