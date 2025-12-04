import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth-input.component.html',
  styleUrls: ['./auth-input.component.css']
})
export class AuthInputComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() icon?: string;
  @Input() control: FormControl | any = new FormControl();
}
