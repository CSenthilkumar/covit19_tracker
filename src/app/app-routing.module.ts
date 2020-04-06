import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoronaComponent } from './corona/corona.component';
import { FatalityComponent } from './fatality/fatality.component';


const routes: Routes = [

  { path:"", redirectTo: "/corona", pathMatch: 'full' },

  { path:"corona",component:CoronaComponent },
  { path:"fatality",component:FatalityComponent } 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
