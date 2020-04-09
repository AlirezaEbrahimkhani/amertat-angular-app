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
import { NavbarModule, WavesModule, ButtonsModule, MdbIconComponent, IconsModule, DropdownModule } from 'angular-bootstrap-md'
import { BrowserModule } from '@angular/platform-browser';
import { HelpButtonComponent } from './components/help-button/help-button.component';

@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    NavbarComponent, 
    HeaderDialogComponent, 
    ContactUsModalComponent, 
    GetStartedModalComponent, 
    GetFreeQouteModalComponent, HelpButtonComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    IconsModule,
    BrowserModule,
    DropdownModule.forRoot(),
  ],
  exports : [
    HeaderComponent, 
    FooterComponent, 
    NavbarComponent,
    HelpButtonComponent,
  ],
  entryComponents : [
    HeaderDialogComponent,
  ]
})
export class HeaderFooterModule { }
