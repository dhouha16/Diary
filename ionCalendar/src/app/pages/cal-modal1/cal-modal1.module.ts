import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalModal1PageRoutingModule } from './cal-modal1-routing.module';

import { CalModal1Page } from './cal-modal1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalModal1PageRoutingModule
  ],
  declarations: [CalModal1Page]
})
export class CalModal1PageModule {}
