import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
const defaultTheme = localStorage.getItem("theme") || "light";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private themeSource = new BehaviorSubject<string>(defaultTheme);
  selectedTheme = this.themeSource.asObservable();
  constructor() {}

  setTheme(theme: string) {
    this.themeSource.next(theme);
    localStorage.setItem("theme", theme);
  }
}
