import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-liste-memo',
  templateUrl: './liste-memo.page.html',
  styleUrls: ['./liste-memo.page.scss'],
})
export class ListeMemoPage implements OnInit {
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
  supprimer(memo){
    this.apiService.supprimerMemo(memo.id).subscribe(response=>{
      this.afficherTous();
    }) 
  }
  
}
