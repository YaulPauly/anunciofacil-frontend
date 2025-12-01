import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from '../../core/layout/auth-layout/auth-layout.component';
import { AUTH_ROUTES } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AUTH_ROUTES),
    AuthLayoutComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule {}
