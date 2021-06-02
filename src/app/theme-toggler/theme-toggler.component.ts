import { Component, OnInit } from "@angular/core";
import { ThemeService } from "../theme.service";

@Component({
  selector: "app-theme-toggler",
  templateUrl: "./theme-toggler.component.html",
  styleUrls: ["./theme-toggler.component.scss"],
})
export class ThemeTogglerComponent implements OnInit {
  theme: string = localStorage.getItem("theme") || "light";
  constructor(private themeService: ThemeService) {}

  ngOnInit() {}

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
    this.themeService.setTheme(this.theme);
  }
}
