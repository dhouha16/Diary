import { Component, OnInit, ViewChild} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { CalModalPage } from '../pages/cal-modal/cal-modal.page';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  eventSource=[];
    viewTitle:string;
    calendar={
      mode:'month',
      currentDate:new Date(),
    };
    
    @ViewChild(CalendarComponent) myCal:CalendarComponent;
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }
  next(){
    this.myCal.slideNext();
  }
  back(){
    this.myCal.slidePrev();
  }
  onViewTitleChanged(title){
    this.viewTitle=title;
  }

 

async openCalModel(){
  const modal=await this.modalCtrl.create({
    component: CalModalPage,
    cssClass:'cal-modal',
    backdropDismiss:false});
    await modal.present();
    modal.onDidDismiss().then((result)=>{
      if (result.data && result.data.event){
        let event =result.data.event;
        if(event.allDay){
          let start=event.startTime;

          event.startTime=new Date(
            Date.UTC(start.getUTCFullYear(),
            start.getUTCMonth(),
            start.getUTCDate())
          
        );
        event.endTime=new Date(
          Date.UTC(
          start.getUTCFullYear(),
          start.getUTCMonth(),
          start.getUTCDate()+1)
        
      );}
      this.eventSource.push(result.data.event);
      this.myCal.loadEvents();
      }
    });


  
}

}
