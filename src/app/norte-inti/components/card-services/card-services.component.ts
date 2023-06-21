import { Component } from '@angular/core';

@Component({
  selector: 'card-services',
  templateUrl: './card-services.component.html',
  styleUrls: ['./card-services.component.css']
})


export class CardServicesComponent {

  public data_card: any[] = [
    {
      img: 'assets/logo.png',
      name: 'Responsabilidad',
      description: 'Con el medio ambiente a través de prácticas amigables y sostenibles.'
    },
    {
      img: 'assets/logo.png',
      name: 'Compromiso',
      description: 'Con la comunidad a través de la inserción laboral y reconocimiento creativo.'
    },
    {
      img: 'assets/logo.png',
      name: 'Calidad',
      description: 'De los productos y las operaciones en la planta de producción.'
    },
    {
      img: 'assets/logo.png',
      name: 'Identidad',
      description: 'Con las personas y comunidad que hace posible realizar nuestra labor.'
    },
    {
      img: 'assets/logo.png',
      name: 'Transperencia',
      description: 'En los procesos, con los colaboradores y con los clientes a través de información real y un comercio justo.'
    }
  ]
  
}
