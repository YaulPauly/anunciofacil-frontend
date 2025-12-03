import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarAdminComponent } from '../../../shared/components/navbar-admin/navbar-admin.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarAdminComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {}
