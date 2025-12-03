import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-brand',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a routerLink="/" class="flex items-center gap-2 cursor-pointer">
      <span class="text-2xl">Anuncia Facil</span>
    </a>
  `
})
export class NavbarBrandComponent {}
