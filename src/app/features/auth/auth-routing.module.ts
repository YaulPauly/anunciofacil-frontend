import { Routes } from '@angular/router';
import { AuthLayoutComponent } from '../../core/layout/auth-layout/auth-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'registro', component: RegisterComponent },
    ],
  },
];
