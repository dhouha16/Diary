import { Component, OnInit } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.page.html',
  styleUrls: ['./diary.page.scss'],
})
export class DiaryPage implements OnInit {
  MemoData:any;

  constructor(public apiService:ApiService) {
    this.MemoData=[];
   }

   ngOnInit() {
    this.afficherTous();
  }
   afficherTous(){
    this.apiService.affichierListe().subscribe(response=>{console.log(response)
    this.MemoData=response;
  }) 
  }
  

}
