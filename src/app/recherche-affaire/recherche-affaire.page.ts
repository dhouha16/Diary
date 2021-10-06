import { Component, OnInit } from '@angular/core';
import { Memo } from '../models/memo';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-recherche-affaire',
  templateUrl: './recherche-affaire.page.html',
  styleUrls: ['./recherche-affaire.page.scss'],
})
export class RechercheAffairePage implements OnInit {
  dossier:string;
  data:Memo;
  MemoData:any;

    constructor(public apiService:ApiService) {
      this.MemoData=[];
     }
  
    ngOnInit() {
    
    }
    afficherdossier(dossier){
      this.apiService.trouverMemo_Affaire(this.dossier).subscribe(response=>{console.log(response)
      this.MemoData=response;
    }) 
    }

 




  

}
