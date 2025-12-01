import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
