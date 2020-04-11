import { IndiaComponent } from './india/india.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoronaComponent } from './corona/corona.component';
import { FatalityComponent } from './fatality/fatality.component';


const routes: Routes = [

  { path:"", redirectTo: "/india", pathMatch: 'full' },

  { path:"corona",component:CoronaComponent },
  { path:"fatality",component:FatalityComponent }, 
  { path:"india",component:IndiaComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
