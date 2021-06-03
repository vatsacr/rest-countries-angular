import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryInformationComponent } from './country-information.component';

describe('CountryInformationComponent', () => {
  let component: CountryInformationComponent;
  let fixture: ComponentFixture<CountryInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
