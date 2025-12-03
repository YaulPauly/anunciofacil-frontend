import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarLink } from '../../../models/navbar-link';

@Component({
  selector: 'app-navbar-links',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgClass],
  styleUrls: ['./navbar-links.component.css'],
  templateUrl: './navbar-links.component.html',
})
export class NavbarLinksComponent {
  @Input() links: NavbarLink[] = [];
  @Input() orientation: 'row' | 'column' = 'row';
}
