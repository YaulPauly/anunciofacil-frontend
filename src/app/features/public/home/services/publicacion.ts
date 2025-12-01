import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PaginacionModel } from '../models/paginacion.model';
import { PublicacionModel } from '../models/publicacion.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Publicacion {
  // Inyectar la herramienta para peticiones HTTP
  private http = inject(HttpClient);

  // URL base del API
  private apiUrl = 'http://localhost:8080/api/publicaciones';

  // Método para obtener publicaciones paginadas
    getPublicaciones(page: number, size: number): Observable<PaginacionModel<PublicacionModel>> {
    // Ajustar el índice de página para que sea cero basado
    const pageIndex = page -1;

    //Config parametros
    const params = new HttpParams().set('page', pageIndex).set('size', size);

    return this.http.get<PaginacionModel<PublicacionModel>>(this.apiUrl, { params });
  }

}
