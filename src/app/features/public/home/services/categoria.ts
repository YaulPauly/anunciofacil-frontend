import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaModel } from '../models/categoria.model';


@Injectable({
  providedIn: 'root',
})
export class Categoria {
  private http = inject(HttpClient);

  private apiUrl = 'localhost:3000/categorias';

  constructor() {}

  getAllCategorias() : Observable<CategoriaModel[]> {
    return this.http.get<CategoriaModel[]>(this.apiUrl);
  }

}
