import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { Memo } from '../models/memo';

@Component({
  selector: 'app-modifier-memo',
  templateUrl: './modifier-memo.page.html',
  styleUrls: ['./modifier-memo.page.scss'],
})
export class ModifierMemoPage implements OnInit {
  id:number;
  data:Memo;
  _tag :string;
  _dossier:string;
  _humeur:string;
  _text:string;
  _titre:string;
  _date_debut:Date;
  _date_fin:Date;
  constructor(public activatedRoute: ActivatedRoute,
    public router:Router,
    public apiService:ApiService) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.params["id"];
    this.apiService.trouverMemo_ID(this.id).subscribe(response=>{console.log(response);
    this.data=response})
  }
  update(){
    this.apiService.updateMemo(this.id,{titre:this._titre,text:this._text,
      dossier:this._dossier,
      humeur:this._humeur,
      tag:this._tag,
      date:{
        dateDebut:this._date_debut,
        dateFin:this._date_fin}
      }).subscribe(response=>{
      this.router.navigate(['liste-memo']);
    })
  }

}
