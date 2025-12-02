import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Adlist } from '../home/components/adlist/adlist';
import { ActivatedRoute } from '@angular/router';
import { Publicacion } from '../home/services/publicacion';
import { PublicacionModel } from '../home/models/publicacion.model';

@Component({
  selector: 'app-category-page',
  imports: [CommonModule, Adlist],
  templateUrl: './category-page.html',
  styleUrl: './category-page.css',
})
export class CategoryPage {
  private route = inject(ActivatedRoute);
  private publicacionService = inject(Publicacion);

  nombreCategoria: string = '';
  listaPublicaciones: PublicacionModel[] = [];
  loading = true;

  ngOnInit(){
    //paramMap permite obtener los parametros de la ruta
    this.route.paramMap.subscribe(params => {
      // Obtener el nombre de la categoría desde los parámetros de la ruta
      this.nombreCategoria = params.get('nombre') || '';
      // Cargar los datos de publicaciones para la categoría
      this.cargarDatos(this.nombreCategoria);
    })
  }

  cargarDatos(categoria:string){
    this.loading = true;
    this.listaPublicaciones = [];

    this.publicacionService.getPublicacionesPorCategoria(categoria, 1, 10)
      .subscribe({
        next: (res) => {
          this.listaPublicaciones = res.contenido;
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        }
      });
  }

}
