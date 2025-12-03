import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-input.component.html',
  styleUrls: ['./auth-input.component.css']
})
export class AuthInputComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() icon?: string;
}
