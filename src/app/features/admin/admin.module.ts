import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from '../../core/layout/admin-layout/admin-layout.component';
import { ADMIN_ROUTES } from './admin-routing.module';
import { AdsModerationComponent } from './pages/ads-moderation/ads-moderation.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { UsersManagementComponent } from './pages/users-management/users-management.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ADMIN_ROUTES),
    AdminLayoutComponent,
    AdsModerationComponent,
    UsersManagementComponent,
    CategoriesComponent
  ]
})
export class AdminModule {}
