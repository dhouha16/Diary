import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeMemoPageRoutingModule } from './liste-memo-routing.module';

import { ListeMemoPage } from './liste-memo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeMemoPageRoutingModule
  ],
  declarations: [ListeMemoPage]
})
export class ListeMemoPageModule {}
