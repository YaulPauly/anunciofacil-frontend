import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarLinksComponent } from '../navbar-links/navbar-links.component';
import { NavbarLink } from '../../../models/navbar-link';

@Component({
  selector: 'app-navbar-user-menu',
  imports: [CommonModule, RouterLink, NgClass, NavbarLinksComponent],
  styleUrls: ['./navbar-user-menu.component.css'],
  templateUrl: './navbar-user-menu.component.html',
})
export class NavbarUserMenuComponent {
  @Input() isLoggedIn = false;
  @Input() user: { nombre: string; email: string; avatar: string } | null = null;
  @Input() menuOpen = false;
  @Input() mobile = false;
  @Input() links: NavbarLink[] = [];

  @Output() menuOpenChange = new EventEmitter<boolean>();
  @Output() logout = new EventEmitter<void>();
}
