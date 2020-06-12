import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPatientsComponent } from './latest-patients.component';

describe('LatestPatientsComponent', () => {
  let component: LatestPatientsComponent;
  let fixture: ComponentFixture<LatestPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
