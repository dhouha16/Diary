import { Injectable } from '@angular/core';
import{HttpHeaders,HttpErrorResponse, HttpClient}from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Memo } from '../models/memo';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import {retry,catchError} from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base_path='http://localhost:3000/memos'
  /* pour obtenir la réponse json de serveur vous devons defenie le type content comme suivant */
  httpOption={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  constructor(private http:HttpClient ) {}
  traitementErreur(erreur:HttpErrorResponse){
    if (erreur.error instanceof ErrorEvent){
      console.error('une erreur s est produite:',erreur.error.message);
    }else {
     console.error(
      'code renvoyer par le backend ${erreur.status} ,'
     +'le corp estait: ${erreur.error}');
  }
return throwError(
      'quelque chose est arrivé;veuillez réessayer plus tard.'
    );

  }
  creerMemo(element):Observable<Memo>{
    return this.http
    .post<Memo>(this.base_path,JSON.stringify(element),this.httpOption)
    .pipe(
      retry(),
      catchError(this.traitementErreur)
    )
  }
  trouverMemo_ID(id): Observable<Memo>{
    return this.http
    .get<Memo>(this.base_path+'/'+id)
    .pipe(
      retry(2),
      catchError(this.traitementErreur)
    )
  }
  trouverMemo_Affaire(dossier): Observable<Memo>{
    return this.http
    .get<Memo>(this.base_path+'/'+dossier)
    .pipe(
      retry(2),
      catchError(this.traitementErreur)
    )
  }
  affichierListe(): Observable<Memo>{
    return this.http
    .get<Memo>(this.base_path)
    .pipe(
      retry(2),
      catchError(this.traitementErreur)
    )
  }
  updateMemo(id, element):Observable<Memo>{
    return this.http
    .put<Memo>(this.base_path+'/'+id,JSON.stringify(element),this.httpOption)
    .pipe(
      retry(2),
      catchError(this.traitementErreur)
    )
  }
  supprimerMemo(id): Observable<Memo>{
    return this.http
    .delete<Memo>(this.base_path+'/'+id)
    .pipe(
      retry(2),
      catchError(this.traitementErreur)
    )
  }
  
  
}
