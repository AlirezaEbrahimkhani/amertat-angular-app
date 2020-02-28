import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatButtonModule } from '@angular/material';
import { HeaderDialogComponent } from './components/header/header-dialog/header-dialog.component';


@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    NavbarComponent, HeaderDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports : [
    HeaderComponent, 
    FooterComponent, 
    NavbarComponent
  ],
  entryComponents : [
    HeaderDialogComponent,
  ]
})
export class HeaderFooterModule { }
