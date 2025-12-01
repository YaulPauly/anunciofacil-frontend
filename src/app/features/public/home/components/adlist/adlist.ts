import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adlist',
  imports: [CommonModule],
  templateUrl: './adlist.html',
  styleUrl: './adlist.css',
})
export class Adlist {

  ad = signal ({
    id: 0,
    title: '',
    content: '',
    postdate: new Date(),
    images: [],
    comments: [],
  })

  //Fetch de la API GetAllAnuncios
  adList = signal ([]);


}
