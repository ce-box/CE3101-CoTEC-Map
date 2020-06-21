import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LastContactsPage } from './last-contacts.page';

describe('LastContactsPage', () => {
  let component: LastContactsPage;
  let fixture: ComponentFixture<LastContactsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastContactsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LastContactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
