import { Routes } from '@angular/router';
import { AdsModerationComponent } from './pages/ads-moderation/ads-moderation.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { UsersManagementComponent } from './pages/users-management/users-management.component';
import { DashboardLayoutComponent } from '../../core/layout/dashboard-layout/dashboard-layout.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: '', component: AdsModerationComponent },
      { path: 'usuarios', component: UsersManagementComponent },
      { path: 'categorias', component: CategoriesComponent }
    ]
  }
];
