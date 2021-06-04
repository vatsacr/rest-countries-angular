import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-country",
  templateUrl: "./country.component.html",
  styleUrls: ["./country.component.scss"],
})
export class CountryComponent implements OnInit {
  constructor() {}
  @Input() country: any = [];

  ngOnInit() {}
}
