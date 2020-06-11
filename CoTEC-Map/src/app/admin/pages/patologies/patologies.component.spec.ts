import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatologiesComponent } from './patologies.component';

describe('PatologiesComponent', () => {
  let component: PatologiesComponent;
  let fixture: ComponentFixture<PatologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
