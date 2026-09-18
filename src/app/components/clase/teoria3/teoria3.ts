import { Component } from '@angular/core';
import { SpecialUser, Superpower, User, Usuario } from '../../../common/interfaces';

@Component({
  imports: [],
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

  superUser: SpecialUser ={
    superpower: 'fly',
    id: '3',
    name: 'Super Sara',
    email: 'super.sara.doe@digitechfp.com',
    role: 'guest',
  };

  pruebas() {
    this.numero = 3;
    this.numero2 = 3;
    // this.numero = "3";
    // this.numero2 = "3";
  }
}
