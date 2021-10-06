import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeMemoPage } from './liste-memo.page';

describe('ListeMemoPage', () => {
  let component: ListeMemoPage;
  let fixture: ComponentFixture<ListeMemoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeMemoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeMemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
