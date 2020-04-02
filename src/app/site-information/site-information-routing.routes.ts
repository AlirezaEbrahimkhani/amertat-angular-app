import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SiteInformationRouringComponent } from "./components/site-information-rouring/site-information-rouring.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { BlogComponent } from "./components/blog/blog.component";

const routes: Routes = [
  {
    path: "",
    component: SiteInformationRouringComponent,
    children: [
      {
        path: "about-us",
        component: AboutUsComponent,
        data: {
          breadcrumb: "درباره ما"
        }
      },
      {
        path: "contact-us",
        component: ContactUsComponent,
        data: {
          breadcrumb: "تماس ما"
        }
      },
      {
        path: "blog",
        component: BlogComponent,
        data: {
          breadcrumb: "وبلاگ ما"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteInformationRoutingModule {}
