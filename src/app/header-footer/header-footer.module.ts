import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports : [
    HeaderComponent, 
    FooterComponent, 
    NavbarComponent
  ]
})
export class HeaderFooterModule { }
