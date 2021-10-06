import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercheAffairePage } from './recherche-affaire.page';

const routes: Routes = [
  {
    path: '',
    component: RechercheAffairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercheAffairePageRoutingModule {}
