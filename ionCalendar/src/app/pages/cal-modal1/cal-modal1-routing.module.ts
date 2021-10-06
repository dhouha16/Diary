import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalModal1Page } from './cal-modal1.page';

const routes: Routes = [
  {
    path: '',
    component: CalModal1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalModal1PageRoutingModule {}
