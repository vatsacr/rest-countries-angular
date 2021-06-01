import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getAllCountries() {
    return this.http.get("https://restcountries.eu/rest/v2/all");
  }

  getCountry(code) {
    return this.http.get("https://restcountries.eu/v2/alpha/" + code);
  }

  getCountriesByRegion(region) {
    return this.http.get("https://restcountries.eu/v2/region/" + region);
  }
}
