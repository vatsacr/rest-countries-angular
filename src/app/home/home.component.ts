import { Component, OnInit } from "@angular/core";
import { CountryService } from "../country.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  countries: any = [];
  searchTerm: string = "";
  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.getCountries();
  }

  searchCountry() {
    const tempCountries = this.countries.filter(
      (data) =>
        !this.searchTerm ||
        data.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.searchTerm.length > 2
      ? (this.countries = tempCountries)
      : this.getCountries();
  }

  getCountries() {
    this.countryService.getAllCountries().subscribe((countries) => {
      this.countries = countries;
    });
  }
}
