import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { ThemeTogglerComponent } from "./components/theme-toggler/theme-toggler.component";
import { CountryComponent } from "./components/country/country.component";
import { HomeComponent } from "./components/home/home.component";
import { CountryInformationComponent } from "./components/country-information/country-information.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThemeTogglerComponent,
    CountryComponent,
    HomeComponent,
    CountryInformationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
