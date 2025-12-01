import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicacionModel } from '../../models/publicacion.model';
import { AdItem } from '../ad-item/ad-item';

@Component({
  selector: 'app-adlist',
  imports: [CommonModule, AdItem],
  templateUrl: './adlist.html',
  styleUrl: './adlist.css',
})
export class Adlist {

  // Input para recibir las publicaciones desde el componente padre
  @Input() publicaciones: PublicacionModel[] = [];


}
