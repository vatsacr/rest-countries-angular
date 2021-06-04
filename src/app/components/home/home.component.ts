import { Component, OnInit } from "@angular/core";
import { CountryService } from "../../services/country.service";
import { Region } from "./models/Region";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  countries: any = [];
  searchTerm: string = "";
  isOpen: boolean = false;
  regions: Array<Region> = [
    { name: "All", value: "all" },
    { name: "Africa", value: "africa" },
    { name: "Americas", value: "americas" },
    { name: "Asia", value: "asia" },
    { name: "Europe", value: "europe" },
    { name: "Oceania", value: "oceania" },
  ];
  selectedRegion: Region = new Region();
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

  getSelectedRegion(region) {
    this.selectedRegion = region;
    if (region.value === "all") {
      this.getCountries();
    } else {
      this.countryService
        .getCountriesByRegion(region.value)
        .subscribe((countries) => {
          this.countries = countries;
        });
    }
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
