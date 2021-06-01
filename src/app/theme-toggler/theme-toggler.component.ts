import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-theme-toggler",
  templateUrl: "./theme-toggler.component.html",
  styleUrls: ["./theme-toggler.component.scss"],
})
export class ThemeTogglerComponent implements OnInit {
  theme: string = "Light";
  constructor() {}

  ngOnInit() {}

  toggleTheme() {
    this.theme = this.theme === "Light" ? "Dark" : "Light";
  }
}
