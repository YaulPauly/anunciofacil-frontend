import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  NAVBAR_ADMIN_CTA,
  NAVBAR_ADMIN_MAIN_LINKS,
  NAVBAR_USER_LINKS,
} from '../../constants/navbar-links';
import { NavbarBrandComponent } from '../../ui/navbar/navbar-brand/navbar-brand.component';
import { NavbarLinksComponent } from '../../ui/navbar/navbar-links/navbar-links.component';
import { NavbarUserMenuComponent } from '../../ui/navbar/navbar-user-menu/navbar-user-menu.component';

@Component({
  selector: 'app-navbar-admin',
  standalone: true,
  imports: [CommonModule, NavbarBrandComponent, NavbarLinksComponent, NavbarUserMenuComponent],
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css'],
})
export class NavbarAdminComponent {
  readonly mainLinks = NAVBAR_ADMIN_MAIN_LINKS;
  readonly ctaLink = NAVBAR_ADMIN_CTA;
  readonly userLinks = NAVBAR_USER_LINKS;

  // TODO: integrar con autenticación real y datos de admin
  isLoggedIn = true;
  usuario = signal({
    nombre: 'Admin',
    email: 'admin@example.com',
    avatar: 'https://i.pravatar.cc/150?img=5',
  });

  desktopMenuOpen = signal(false);
  mobileMenuOpen = signal(false);

  toggleMobileMenu() {
    this.mobileMenuOpen.update((open) => !open);
  }

  handleLogout() {
    this.isLoggedIn = false;
    this.desktopMenuOpen.set(false);
    this.mobileMenuOpen.set(false);
  }
}
