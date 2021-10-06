import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import { registerLocaleData } from '@angular/common'; import localeTN from '@angular/common/locale/ar-TN'; registerLocaleData(localeEN);

const routes: Routes = [
  {
    path: 'diary',
    loadChildren: () => import('./diary/diary.module').then( m => m.DiaryPageModule)
  },
  {
    path: '',
    redirectTo: 'diary',
    pathMatch: 'full'
  },
  {
    path: 'agenda',
    loadChildren: () => import('./agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'localisation',
    loadChildren: () => import('./localisation/localisation.module').then( m => m.LocalisationPageModule)
  },
  {
    path: 'meteo',
    loadChildren: () => import('./meteo/meteo.module').then( m => m.MeteoPageModule)
  },
  {
    path: 'cal-modal',
    loadChildren: () => import('./pages/cal-modal/cal-modal.module').then( m => m.CalModalPageModule)
  },
  {
    path: 'cal-modal',
    loadChildren: () => import('./pages/cal-modal/cal-modal.module').then( m => m.CalModalPageModule)
  },
  {
    path: 'creer-memo',
    loadChildren: () => import('./creer-memo/creer-memo.module').then( m => m.CreerMemoPageModule)
  },
  {
    path: 'liste-memo',
    loadChildren: () => import('./liste-memo/liste-memo.module').then( m => m.ListeMemoPageModule)
  },
  {
    path: 'modifier-memo/:id',
    loadChildren: () => import('./modifier-memo/modifier-memo.module').then( m => m.ModifierMemoPageModule)
  },
  {
    path: 'recherche-affaire',
    loadChildren: () => import('./recherche-affaire/recherche-affaire.module').then( m => m.RechercheAffairePageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
