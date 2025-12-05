import { Component } from '@angular/core';
import { ProfileForm } from '../../components/profile-form/profile-form';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProfileForm],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {}
