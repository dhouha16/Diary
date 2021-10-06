import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreerMemoPage } from './creer-memo.page';

describe('CreerMemoPage', () => {
  let component: CreerMemoPage;
  let fixture: ComponentFixture<CreerMemoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerMemoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreerMemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
