import { Routes } from '@angular/router';
import { PublicLayoutComponent } from '../../core/layout/public-layout/public-layout.component';
import { AdDetailComponent } from './ad-detail/ad-detail.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './home/contact.component';
import { NewAdComponent } from '../dashboard/pages/new-ad/new-ad.component';
import { ProfileComponent } from '../dashboard/pages/profile/profile.component';
import { MyAdsComponent } from '../dashboard/pages/my-ads/my-ads.component';
import { CategoryPage } from './category-page/category-page';

export const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'inicio', redirectTo: '', pathMatch: 'full' },
      { path: 'categoria/:nombre', component: CategoryPage },
      { path: 'contacto', component: ContactComponent },
      { path: 'anuncio', component: NewAdComponent },
      { path: 'perfil', component: ProfileComponent },
      { path: 'mis-anuncios', component: MyAdsComponent },
      { path: 'ajustes', component: ProfileComponent },
      { path: 'anuncios/:id', component: AdDetailComponent }
    ]
  }
];
