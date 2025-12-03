import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NAVBAR_CTA, NAVBAR_MAIN_LINKS, NAVBAR_USER_LINKS } from '../../constants/navbar-links';
import { NavbarBrandComponent } from '../../ui/navbar/navbar-brand/navbar-brand.component';
import { NavbarLinksComponent } from '../../ui/navbar/navbar-links/navbar-links.component';
import { NavbarUserMenuComponent } from '../../ui/navbar/navbar-user-menu/navbar-user-menu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NavbarBrandComponent, NavbarLinksComponent, NavbarUserMenuComponent],
  templateUrl: './navbar-public.component.html',
  styleUrls: ['./navbar-public.component.css'],
})
export class NavbarPublicComponent {
  readonly mainLinks = NAVBAR_MAIN_LINKS;
  readonly ctaLink = NAVBAR_CTA;
  readonly userLinks = NAVBAR_USER_LINKS;

  //TODO: Integrar con el servicio de autenticación
  isLoggedIn = signal(false);

  usuario = signal({
    nombre: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://i.pravatar.cc/150?img=3',
  });

  desktopMenuOpen = signal(false);
  mobileMenuOpen = signal(false);

  toggleMobileMenu() {
    this.mobileMenuOpen.update((open) => !open);
  }

  handleLogout() {
    this.isLoggedIn.set(false);
    this.desktopMenuOpen.set(false);
    this.mobileMenuOpen.set(false);
  }
}
