import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthButtonComponent } from '../../../shared/ui/auth/auth-button/auth-button.component';
import { AuthCardComponent } from '../../../shared/ui/auth/auth-card/auth-card.component';
import { AuthFileInputComponent } from '../../../shared/ui/auth/auth-file-input/auth-file-input.component';
import { AuthInputComponent } from '../../../shared/ui/auth/auth-input/auth-input.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    AuthCardComponent,
    AuthInputComponent,
    AuthFileInputComponent,
    AuthButtonComponent,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {}
