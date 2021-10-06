import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierMemoPage } from './modifier-memo.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierMemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierMemoPageRoutingModule {}
