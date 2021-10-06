import { Component, OnInit } from '@angular/core';
import { Memo } from '../models/memo';
import { Data, Router } from '@angular/router';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-creer-memo',
  templateUrl: './creer-memo.page.html',
  styleUrls: ['./creer-memo.page.scss'],
})
export class CreerMemoPage implements OnInit {
  _tag :string;
  _dossier:string;
  _humeur:string;
  _text:string;
  _titre:string;
  _date_debut:Date;
  _date_fin:Date;
  constructor(public apiService:ApiService,public router:Router){
 
  }
  

  ngOnInit() {
 
  }
  submitForm(){
     this.apiService.creerMemo(
       {titre: this._titre,
         text: this._text,
        dossier:this._dossier,
        humeur:this._humeur,
        tag:this._tag,
        date:{
          dateDebut:this._date_debut,
          dateFin:this._date_fin
        }
      }).subscribe((response)=>{
      console.log(response);
      this.router.navigate(['liste-memo']);
      
    });
  }
}
