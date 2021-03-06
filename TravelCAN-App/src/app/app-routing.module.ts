import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'travel-buddy',
    loadChildren: () => import('./pages/travel-buddy/travel-buddy.module').then( m => m.TravelBuddyPageModule)
  },
  {
    path: 'accommodation',
    loadChildren: () => import('./pages/accommodation/accommodation.module').then( m => m.AccommodationPageModule)
  },
  {
    path: 'ride-share',
    loadChildren: () => import('./pages/ride-share/ride-share.module').then( m => m.RideSharePageModule)
  },
  {
    path:'',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
