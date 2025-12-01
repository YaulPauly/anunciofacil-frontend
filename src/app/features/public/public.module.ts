import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PublicLayoutComponent } from '../../core/layout/public-layout/public-layout.component';
import { MyAdsComponent } from '../dashboard/pages/my-ads/my-ads.component';
import { NewAdComponent } from '../dashboard/pages/new-ad/new-ad.component';
import { ProfileComponent } from '../dashboard/pages/profile/profile.component';
import { AdDetailComponent } from './ad-detail/ad-detail.component';
import { ContactComponent } from './home/contact.component';
import { HomeComponent } from './home/home.component';
import { PUBLIC_ROUTES } from './public-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PUBLIC_ROUTES),
    PublicLayoutComponent,
    HomeComponent,
    ContactComponent,
    AdDetailComponent,
    NewAdComponent,
    ProfileComponent,
    MyAdsComponent
  ]
})
export class PublicModule {}
