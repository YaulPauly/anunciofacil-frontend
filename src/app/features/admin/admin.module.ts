import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from '../../core/layout/dashboard-layout/dashboard-layout.component';
import { ADMIN_ROUTES } from './admin-routing.module';
import { AdsModerationComponent } from './pages/ads-moderation/ads-moderation.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { UsersManagementComponent } from './pages/users-management/users-management.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ADMIN_ROUTES),
    DashboardLayoutComponent,
    AdsModerationComponent,
    UsersManagementComponent,
    CategoriesComponent
  ]
})
export class AdminModule {}
