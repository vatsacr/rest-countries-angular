import { Component, OnInit } from "@angular/core";
import { CountryService } from "../country.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  countries: any = [];
  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.countryService.getAllCountries().subscribe((countries) => {
      this.countries = countries;
    });
  }
}
