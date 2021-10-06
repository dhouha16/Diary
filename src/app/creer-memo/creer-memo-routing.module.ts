import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreerMemoPage } from './creer-memo.page';

const routes: Routes = [
  {
    path: '',
    component: CreerMemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreerMemoPageRoutingModule {}
