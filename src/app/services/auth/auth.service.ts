import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { jwtDecode } from 'jwt-decode';
import { UsuarioLoginDTO, AuthResponse, UsuarioRegisterDTO } from './../../core/models/auth.models';

export interface JwtPayload {
  sub: string;
  nombre: string;
  apellidos: string;
  rol: string;
  exp: number;
}

export interface UsuarioLogueado {
  nombre: string;
  email: string;
  rol: string;
  avatar?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/auth'; 


  private isLoggedInSubject: BehaviorSubject<boolean>;
  public isLoggedIn$: Observable<boolean>;

  private currentUserSubject = new BehaviorSubject<UsuarioLogueado | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    const tokenExiste = this.hasToken();
    this.isLoggedInSubject = new BehaviorSubject<boolean>(tokenExiste);
    this.isLoggedIn$ = this.isLoggedInSubject.asObservable();

    if (tokenExiste) {
      const token = this.getToken();
      if (token) {
        this.decodificarToken(token);
      }
    }
  }

  login(credentials: UsuarioLoginDTO): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        if (response.token) {
          this.guardarToken(response.token);
          this.decodificarToken(response.token);
          this.isLoggedInSubject.next(true); 
        }
      })
    );
  }

  register(datos: UsuarioRegisterDTO): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, datos);
  }

  logout(): void {
    this.borrarToken();
    this.currentUserSubject.next(null);
    this.isLoggedInSubject.next(false); 
  }


  private decodificarToken(token: string): void {
    try {
      const decoded: JwtPayload = jwtDecode(token);
      
      const usuario: UsuarioLogueado = {
        nombre: decoded.nombre + ' ' + decoded.apellidos,
        email: decoded.sub,
        rol: decoded.rol,
        avatar: `https://ui-avatars.com/api/?name=${decoded.nombre}+${decoded.apellidos}&background=random` 
      };

      this.currentUserSubject.next(usuario);
      
    } catch (error) {
      console.error('Error al decodificar token', error);
      this.logout(); 
    }
  }

  private guardarToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token);
    }
  }

  private borrarToken(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }
    return null;
  }

  private hasToken(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('token');
    }
    return false;
  }
}