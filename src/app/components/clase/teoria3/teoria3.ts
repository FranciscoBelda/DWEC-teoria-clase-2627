import { Component } from '@angular/core';
import { SpecialUser, Superpower, User, Usuario } from '../../../common/interfaces';
import { Product } from '../../../models/models';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-teoria3',
  styleUrl: './teoria3.css',
  templateUrl: './teoria3.html',
})
export class Teoria3 {
  numero: number = 1;
  numero2 = 2.5;
  numero3: number = 0.8765437;

  palabra: string = 'Hola';
  palabra2 = 'Hola!';

  booleano: boolean = true;
  booleano2 = false;

  objeto: Usuario = {
    nombre: 'Juan',
    edad: 21,
  };
  objeto2: Usuario = {
    nombre: 'Pepe',
    edad: 22,
  };

  newUser: User = {
    id: '1',
    name: 'John',
    email: 'john.doe@digitechfp.com',
    role: 'admin',
  };
  newUser2: User = {
    id: '2',
    name: 'Sara',
    email: 'sara.doe@digitechfp.com',
    role: 'customer',
    phoneNumber: '1234',
  };

  superUser: SpecialUser = {
    superpower: 'fly',
    id: '3',
    name: 'Super Sara',
    email: 'super.sara.doe@digitechfp.com',
    role: 'guest',
  };

  miProducto: Product = {
    id: '1',
    title: 'Camiseta',
    price: 18.99,
    description: 'Camiseta molona',
    category: 'clothing',
    imageUrl:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTwRR_8iakHdwNPEjWcUBmjBG2IiFYvqstT3xZAzOhrymChQtMGC6iVGDTbLV4DigrKR4JbD3zO8vy99FaGTfYoYm5nQeJCDCiLofizYq1UtoHEvH0oP3SbjwMG81YL4FF3haMawtg&usqp=CAc',
    rating: {
      count: 123467,
      rate: 4.5,
    },
  };

  pruebas() {
    this.numero = 3;
    this.numero2 = 3;
    // this.numero = "3";
    // this.numero2 = "3";
  }
}
