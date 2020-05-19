import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./shared/material.module";
import { HeaderFooterModule } from "./header-footer/header-footer.module";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "./shared/shared.module";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
  {
    path: "amertat",
    children: [
      {
        path: "medical-service",
        loadChildren:
          "./medical-service/medical-service.module#MedicalServiceModule",
      },
      {
        path: "information",
        loadChildren: "./information/information.module#InformationModule",
      },
      {
        path: "tourism-service",
        loadChildren:
          "./tourism-service/tourism-service.module#TourismServiceModule",
      },
      {
        path: "site-information",
        loadChildren:
          "./site-information/site-information.module#SiteInformationModule",
      },
      {
        path: "home",
        component: HomeComponent,
      },
    ],
  },
  {
    path: "**",
    redirectTo: "/amertat/home",
  },
];
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HeaderFooterModule,
    RouterModule.forRoot(routes),
    SharedModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
