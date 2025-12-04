import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

// Asegúrate de que esta ruta sea la correcta hacia tu servicio
import { AuthService, UsuarioLogueado } from '../../../services/auth/auth.service';

// Constantes y componentes UI
import { NAVBAR_CTA, NAVBAR_MAIN_LINKS, NAVBAR_USER_LINKS } from '../../constants/navbar-links'; //
import { NavbarBrandComponent } from '../../ui/navbar/navbar-brand/navbar-brand.component'; //
import { NavbarLinksComponent } from '../../ui/navbar/navbar-links/navbar-links.component'; //
import { NavbarUserMenuComponent } from '../../ui/navbar/navbar-user-menu/navbar-user-menu.component'; //

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NavbarBrandComponent, NavbarLinksComponent, NavbarUserMenuComponent], //
  templateUrl: './navbar-public.component.html',
  styleUrls: ['./navbar-public.component.css'],
})
export class NavbarPublicComponent implements OnInit {
  
  readonly mainLinks = NAVBAR_MAIN_LINKS;
  readonly ctaLink = NAVBAR_CTA;
  readonly userLinks = NAVBAR_USER_LINKS;

  // Signals reactivos
  isLoggedIn = signal(false);
  usuario = signal<UsuarioLogueado | null>(null);
  
  desktopMenuOpen = signal(false);
  mobileMenuOpen = signal(false);

  constructor(
    private router: Router, 
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // 1. Escuchar cambios en el estado de autenticación
    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn.set(status);
    });

    // 2. Escuchar cambios en los datos del usuario
    this.authService.currentUser$.subscribe(user => {
      // Si hay usuario lo seteamos, si es null (logout) también
      this.usuario.set(user);
    });
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update((open) => !open);
  }

  handleLogout() {
    // PASO CLAVE: Delegar el cierre de sesión al servicio
    this.authService.logout();

    // Limpieza visual
    this.desktopMenuOpen.set(false);
    this.mobileMenuOpen.set(false);
    
    // Redirección
    this.router.navigate(['/']); 
  }
}