export interface NavbarLink {
  label: string;
  path: string;
  variant?: 'link' | 'cta';
  exact?: boolean;
}
