import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierMemoPageRoutingModule } from './modifier-memo-routing.module';

import { ModifierMemoPage } from './modifier-memo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierMemoPageRoutingModule
  ],
  declarations: [ModifierMemoPage]
})
export class ModifierMemoPageModule {}
