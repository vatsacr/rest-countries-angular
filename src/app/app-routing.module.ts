import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CountryInformationComponent } from "./country-information/country-information.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "country/:id",
    component: CountryInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
