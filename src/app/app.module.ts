import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { SharedModule } from './shared/shared.module';
import { HeaderFooterModule } from './header-footer/header-footer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HeaderFooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
