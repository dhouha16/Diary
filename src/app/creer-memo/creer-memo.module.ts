import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreerMemoPageRoutingModule } from './creer-memo-routing.module';

import { CreerMemoPage } from './creer-memo.page';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreerMemoPageRoutingModule,
    HttpClientModule
  ],
  declarations: [CreerMemoPage]
})
export class CreerMemoPageModule {}
