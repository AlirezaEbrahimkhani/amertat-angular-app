import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { HeaderFooterModule } from './header-footer/header-footer.module';
import { Routes, RouterModule } from '@angular/router';


const routes : Routes = [
  {
    path : "amertat",
    children : [
      {
        path : "medical-service",
        loadChildren : "./medical-service/medical-service.module#MedicalServiceModule"
      },
      {
        path : "information",
        loadChildren : "./information/information.module#InformationModule"
      }
    ]
  }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HeaderFooterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
