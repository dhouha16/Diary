import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheAffairePageRoutingModule } from './recherche-affaire-routing.module';

import { RechercheAffairePage } from './recherche-affaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheAffairePageRoutingModule
  ],
  declarations: [RechercheAffairePage]
})
export class RechercheAffairePageModule {}
