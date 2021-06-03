import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CountryService } from "../country.service";

@Component({
  selector: "app-country-information",
  templateUrl: "./country-information.component.html",
  styleUrls: ["./country-information.component.scss"],
})
export class CountryInformationComponent implements OnInit {
  country: any;
  constructor(
    private countryService: CountryService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getCountryInfo();
  }

  getCountryInfo() {
    const routeParams = this.activatedRoute.snapshot.params;
    this.countryService.getCountry(routeParams.id).subscribe((res) => {
      this.country = res;
    });
  }
}
