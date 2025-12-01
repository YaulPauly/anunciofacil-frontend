import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  
  isLoggedIn = signal(true);

  usuario = signal ({
    nombre: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://i.pravatar.cc/150?img=3'
  })

  toggleMenu = signal(false);

  isResponsive = signal(false);
  mobileMenuOpen = signal(false);

}
