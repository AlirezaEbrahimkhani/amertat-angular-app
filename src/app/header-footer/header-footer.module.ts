import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderDialogComponent } from './components/header/header-dialog/header-dialog.component';
import { ContactUsModalComponent } from './components/header/contact-us-modal/contact-us-modal.component';
import { MaterialModule } from '../shared/material.module';
import { GetStartedModalComponent } from './components/header/get-started-modal/get-started-modal.component';
import { GetFreeQouteModalComponent } from './components/header/get-free-qoute-modal/get-free-qoute-modal.component';


@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    NavbarComponent, 
    HeaderDialogComponent, 
    ContactUsModalComponent, 
    GetStartedModalComponent, 
    GetFreeQouteModalComponent,
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
