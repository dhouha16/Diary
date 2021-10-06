import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifierMemoPage } from './modifier-memo.page';

describe('ModifierMemoPage', () => {
  let component: ModifierMemoPage;
  let fixture: ComponentFixture<ModifierMemoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierMemoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifierMemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
