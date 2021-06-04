import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CountryInformationComponent } from "./components/country-information/country-information.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "country/:id",
    component: CountryInformationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
