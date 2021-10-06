import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalModal1Page } from './cal-modal1.page';

describe('CalModal1Page', () => {
  let component: CalModal1Page;
  let fixture: ComponentFixture<CalModal1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalModal1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalModal1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
