import { Component, inject, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Categoria } from '../../../home/services/categoria';
import { CategoriaModel } from '../../../home/models/categoria.model';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  
  // Inyectar el servicio de categorías
  private categoriaService = inject(Categoria);
  // variable para guardar lista
  listaCategorias: CategoriaModel[] = [];


  // Categorias Prueba
  categoriasPrueba: CategoriaModel[] = [
    { idCategoria: 1, nombreCategoria: 'Empleos' },
    { idCategoria: 2, nombreCategoria: 'Bienes' },
    { idCategoria: 3, nombreCategoria: 'Autos' },
    { idCategoria: 4, nombreCategoria: 'Inmuebles' }
  ]

  ngOnInit(): void {
    this.cargarCategorias();
  }

  cargarCategorias() {
    this.categoriaService.getAllCategorias().subscribe({
      next:(data) => {
        this.listaCategorias = data;
        console.log("Categorias cargadas:", data);
      },
      error: (err) => {
        console.error("Error al cargar categorias:", err);
      }
    })
  }

}
