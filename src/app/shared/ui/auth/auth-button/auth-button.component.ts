import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.css']
})
export class AuthButtonComponent {
  @Input() label = '';
  @Input() type: 'button' | 'submit' = 'button';
}
