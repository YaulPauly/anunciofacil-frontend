import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthButtonComponent } from '../../../shared/ui/auth/auth-button/auth-button.component';
import { AuthCardComponent } from '../../../shared/ui/auth/auth-card/auth-card.component';
import { AuthInputComponent } from '../../../shared/ui/auth/auth-input/auth-input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthCardComponent, AuthInputComponent, AuthButtonComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {}
