import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeMemoPage } from './liste-memo.page';

const routes: Routes = [
  {
    path: '',
    component: ListeMemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeMemoPageRoutingModule {}
