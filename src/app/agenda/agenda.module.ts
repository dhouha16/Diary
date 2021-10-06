import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaPageRoutingModule } from './agenda-routing.module';

import { AgendaPage } from './agenda.page';
import { NgCalendarModule  } from 'ionic2-calendar';
import { CalModalPageModule } from '../pages/cal-modal/cal-modal.module';
import { registerLocaleData} from '@angular/common';
import localeTN from '@angular/common/locales/ar-TN'
registerLocaleData(localeTN);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaPageRoutingModule,
    NgCalendarModule,
    CalModalPageModule
  ],
  declarations: [AgendaPage]
})
export class AgendaPageModule {}
