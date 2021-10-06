import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RechercheAffairePage } from './recherche-affaire.page';

describe('RechercheAffairePage', () => {
  let component: RechercheAffairePage;
  let fixture: ComponentFixture<RechercheAffairePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheAffairePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RechercheAffairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
