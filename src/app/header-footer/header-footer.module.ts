import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderDialogComponent } from './components/header/header-dialog/header-dialog.component';
import { ContactUsModalComponent } from './components/header/contact-us-modal/contact-us-modal.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    NavbarComponent, 
    HeaderDialogComponent, 
    ContactUsModalComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
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
