import { NavbarLink } from '../models/navbar-link';

export const NAVBAR_MAIN_LINKS: NavbarLink[] = [
  { label: 'Inicio', path: '/inicio' },
  { label: 'Contacto', path: '/contacto' },
];

export const NAVBAR_CTA: NavbarLink = {
  label: 'Crear anuncio',
  path: '/anuncio',
  variant: 'cta',
};

export const NAVBAR_USER_LINKS: NavbarLink[] = [
  { label: 'Perfil', path: '/perfil' },
  { label: 'Mis anuncios', path: '/mis-anuncios' },
  { label: 'Ajustes', path: '/ajustes' },
];

export const NAVBAR_ADMIN_MAIN_LINKS: NavbarLink[] = [
  { label: 'Panel', path: '/admin' },
  { label: 'Anuncios', path: '/admin' },
  { label: 'Usuarios', path: '/admin/usuarios' },
  { label: 'Categorías', path: '/admin/categorias' },
];

export const NAVBAR_ADMIN_CTA: NavbarLink = {
  label: 'Ver sitio',
  path: '/',
  variant: 'cta',
};
