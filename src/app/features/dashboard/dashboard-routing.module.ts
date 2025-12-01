import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from '../../core/layout/dashboard-layout/dashboard-layout.component';
import { EditAdComponent } from './pages/edit-ad/edit-ad.component';
import { MyAdsComponent } from './pages/my-ads/my-ads.component';
import { NewAdComponent } from './pages/new-ad/new-ad.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: '', component: MyAdsComponent },
      { path: 'nuevo', component: NewAdComponent },
      { path: 'editar/:id', component: EditAdComponent },
      { path: 'perfil', component: ProfileComponent }
    ]
  }
];
