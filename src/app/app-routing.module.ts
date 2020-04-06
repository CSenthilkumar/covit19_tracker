import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Router } from '@angular/router';
import { CoronaComponent } from './corona/corona.component';
import { FatalityComponent } from './fatality/fatality.component';
import { ApplicationStateService } from './application-state.service';

const desktop_routes: Routes = [
  { path:"", redirectTo: "/corona", pathMatch: 'full' },

  { path:"corona",component:CoronaComponent },
  { path:"fatality",component:FatalityComponent } 
];

const mobile_routes: Routes = [
  { path:"", redirectTo: "/corona", pathMatch: 'full' },

  { path:"corona",component:CoronaComponent },
  { path:"fatality",component:FatalityComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(desktop_routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  public constructor(private router: Router,
    private applicationStateService: ApplicationStateService) {

    if (applicationStateService.getIsMobileResolution()) {
      router.resetConfig(mobile_routes);
    }
  }
}
