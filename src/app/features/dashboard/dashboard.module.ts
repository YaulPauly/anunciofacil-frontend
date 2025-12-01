import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from '../../core/layout/dashboard-layout/dashboard-layout.component';
import { DASHBOARD_ROUTES } from './dashboard-routing.module';
import { EditAdComponent } from './pages/edit-ad/edit-ad.component';
import { MyAdsComponent } from './pages/my-ads/my-ads.component';
import { NewAdComponent } from './pages/new-ad/new-ad.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DASHBOARD_ROUTES),
    DashboardLayoutComponent,
    MyAdsComponent,
    NewAdComponent,
    EditAdComponent,
    ProfileComponent
  ]
})
export class DashboardModule {}
