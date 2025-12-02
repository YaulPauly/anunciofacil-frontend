import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PaginacionModel } from '../models/paginacion.model';
import { PublicacionModel } from '../models/publicacion.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Publicacion {

  
    

  // Inyectar la herramienta para peticiones HTTP
  private http = inject(HttpClient);

  // URL base del API
  private apiUrl = 'http://localhost:8080/api/publicaciones';
  
  // --- DATOS DE PRUEBA (Hardcoded aquí mismo) ---
  private misDatosFalsos: PublicacionModel[] = [
    {
      idPublicacion: 1,
      titulo: 'Departamento de Lujo en Miraflores',
      contenido: 'Vista al mar, 3 habitaciones, 2 baños...',
      fechaPublicacion: '2024-03-20',
      imagenes: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500', 
      estado: 'ACTIVO',
      usuario: { idUsuario: 1, nombre: 'Carlos', apellido: 'Pérez', email: 'c@c.com', rol: 'USER' },
      categoria: { idCategoria: 1, nombreCategoria: 'Inmuebles' }
    },
    {
      idPublicacion: 2,
      titulo: 'Toyota Corolla 2024',
      contenido: 'Casi nuevo, solo 5000km...',
      fechaPublicacion: '2024-03-21',
      imagenes: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500',
      estado: 'ACTIVO',
      usuario: { idUsuario: 2, nombre: 'Maria', apellido: 'Gomez', email: 'm@m.com', rol: 'USER' },
      categoria: { idCategoria: 2, nombreCategoria: 'Autos' }
    },
    {
      idPublicacion: 3,
      titulo: 'Laptop Gamer',
      contenido: 'Potente laptop para desarrollo y juegos...',
      fechaPublicacion: '2024-03-22',
      imagenes: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500',
      estado: 'ACTIVO',
      usuario: { idUsuario: 3, nombre: 'Juan', apellido: 'Tech', email: 'j@t.com', rol: 'USER' },
      categoria: { idCategoria: 3, nombreCategoria: 'Empleos' }
    }
    
  ];

  // Modificamos el método para que devuelva los datos falsos en vez de llamar a la API
  getPublicaciones(page: number, size: number): Observable<PaginacionModel<PublicacionModel>> {
    
    // Simulamos la respuesta de paginación de Spring Boot
    const respuestaMock: PaginacionModel<PublicacionModel> = {
      contenido: this.misDatosFalsos, // <--- Aquí van tus datos
      paginasTotales: 1,
      totalElementos: this.misDatosFalsos.length,
      tamaño: size,
      paginaActual: page - 1
    };

    // 'of' convierte el objeto en un Observable instantáneo
    return of(respuestaMock);
    
    // CUANDO TENGAS EL BACKEND LISTO, BORRAS LO DE ARRIBA Y DESCOMENTAS ESTO:
    // return this.http.get<PageResponse<Publicacion>>(...);
  }

  // Si también quieres probar el filtro por categoría:
  getPublicacionesPorCategoria(categoria: string, page: number, size: number): Observable<PaginacionModel<PublicacionModel>> {
    // Filtramos el array falso
    const filtrados = this.misDatosFalsos.filter(p => 
      p.categoria.nombreCategoria.toLowerCase() === categoria.toLowerCase()
    );

    const respuestaMock: PaginacionModel<PublicacionModel> = {
      contenido: filtrados,
      paginasTotales: 1,
      totalElementos: filtrados.length,
      tamaño: size,
      paginaActual: page - 1
    };

    return of(respuestaMock);
  }
}




  /*
  // Método para obtener publicaciones paginadas
    getPublicaciones(page: number, size: number): Observable<PaginacionModel<PublicacionModel>> {
    // Ajustar el índice de página para que sea cero basado
    const pageIndex = page -1;

    //Config parametros
    const params = new HttpParams().set('page', pageIndex).set('size', size);

    return this.http.get<PaginacionModel<PublicacionModel>>(this.apiUrl, { params });
  }

    getPublicacionesPorCategoria(categoria: string, page: number, size: number): Observable<PaginacionModel<PublicacionModel>> {
    // Ajustar el índice de página para que sea cero basado
    const pageIndex = page -1;
    //Enviar el nombre de categoria como parametro
    const params = new HttpParams().set('page', pageIndex).set('size', size).set('categoria', categoria);

    return this.http.get<PaginacionModel<PublicacionModel>>(`${this.apiUrl}/categoria`, { params });
    }
    */

