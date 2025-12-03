import { Component, Input } from '@angular/core';
import { PublicacionModel } from '../../models/publicacion.model';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-ad-item',
  imports: [RouterLink],
  templateUrl: './ad-item.html',
  styleUrls: ['./ad-item.css'],
})
export class AdItem {
  // Input para recibir una publicación desde el componente padre
  @Input() item!: PublicacionModel;
}
