import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarPublicComponent } from './components/navbar-public/navbar-public.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';

@NgModule({
  imports: [CommonModule, NavbarPublicComponent, NavbarAdminComponent],
  exports: [NavbarPublicComponent, NavbarAdminComponent]
})
export class SharedModule {}
