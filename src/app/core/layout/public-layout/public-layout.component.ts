import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarPublicComponent } from '../../../shared/components/navbar-public/navbar-public.component';
import { Footer } from '../../../shared/components/footer/footer';

@Component({
  selector: 'app-public-layout',
  imports: [RouterOutlet, NavbarPublicComponent, Footer],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.css'
})
export class PublicLayoutComponent {}
