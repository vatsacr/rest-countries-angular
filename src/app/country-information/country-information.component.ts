import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CountryService } from "../country.service";

@Component({
  selector: "app-country-information",
  templateUrl: "./country-information.component.html",
  styleUrls: ["./country-information.component.scss"],
})
export class CountryInformationComponent implements OnInit, OnDestroy {
  country: any;
  component: any;
  constructor(
    private countryService: CountryService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getCountryInfo();
  }

  getCountryInfo() {
    const routeParams = this.activatedRoute.snapshot.params;
    this.component = this.countryService
      .getCountry(routeParams.id)
      .subscribe((res) => {
        this.country = res;
      });
  }

  ngOnDestroy() {
    this.component.unsubscribe();
  }
}
