import { Component } from '@angular/core';
import { InputProfileComponent } from '../input-profile.component/input-profile.component';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [InputProfileComponent],
  templateUrl: './profile-form.html',
  styleUrl: './profile-form.css',
})
export class ProfileForm {

} 
