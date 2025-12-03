import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-card.component.html',
  styleUrls: ['./auth-card.component.css']
})
export class AuthCardComponent {
  @Input() title = '';
  @Input() subtitle = '';
}
