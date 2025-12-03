import { Routes } from '@angular/router';
import { AdsModerationComponent } from './pages/ads-moderation/ads-moderation.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { UsersManagementComponent } from './pages/users-management/users-management.component';
import { AdminLayoutComponent } from '../../core/layout/admin-layout/admin-layout.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: AdsModerationComponent },
      { path: 'usuarios', component: UsersManagementComponent },
      { path: 'categorias', component: CategoriesComponent }
    ]
  }
];
