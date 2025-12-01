import { Component, inject, OnInit } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Adlist } from './components/adlist/adlist';
import { PublicacionModel } from './models/publicacion.model';
import { Publicacion } from './services/publicacion';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Adlist],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  //Inyeccion de servicio
  private publicacionService = inject(Publicacion);

  //Variables para guardar datos

  listaPublicaciones: PublicacionModel[] = [];

  //Paginacion

  paginaActual = 1;
  tamañoPagina = 9;

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.publicacionService.getPublicaciones(this.paginaActual, this.tamañoPagina).subscribe({
      next: (data) => {
        this.listaPublicaciones = data.contenido;
        console.log('Datos recibidos', this)
      },
      error: (error) => {
        console.error('Error al cargar las publicaciones:', error);
      }
    });
  }

}
