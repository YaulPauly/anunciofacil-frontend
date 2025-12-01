import { Component, Input } from '@angular/core';
import { PublicacionModel } from '../../models/publicacion.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ad-item',
  imports: [CommonModule],
  templateUrl: './ad-item.html',
  styleUrl: './ad-item.css',
})
export class AdItem {
  // Input para recibir una publicación desde el componente padre
  @Input() item!: PublicacionModel;
}
