import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SiteInformationRoutingModule } from "./site-information-routing.routes";
import { SiteInformationRouringComponent } from "./components/site-information-rouring/site-information-rouring.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { SharedModule } from "../shared/shared.module";
import { BlogComponent } from "./components/blog/blog.component";

@NgModule({
  declarations: [
    SiteInformationRouringComponent,
    AboutUsComponent,
    BlogComponent,
  ],
  imports: [CommonModule, SiteInformationRoutingModule, SharedModule],
})
export class SiteInformationModule {}
