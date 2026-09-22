import { Component } from '@angular/core';
import { Role } from '../../../common/interfaces';

@Component({
  imports: [],
  selector: 'app-teoria4',
  styleUrl: './teoria4.css',
  templateUrl: './teoria4.html',
})
export class Teoria4 {
  cart = [{id:1, qty:1},{id:2, qty:1}];

  iniciar() {
    this.cart[0].qty = 2; // MUTABLE. Modifica el objeto original

    const updatedCart: {id:number;qty:number}[] =
      this.cart.map((item:{id:number;qty:number}) =>
        item.id === 1 ? {...item, qty:2} : item) // INMUTABLE.
    console.log(updatedCart);
  }

  // SPREAD (...) y Desestructuración de Objetos
  ejemplos(){
    const user: NewUser = {
      username: 'Sara',
      role: 'admin',
      token: '123'
    }

    // Desestructurar
    const {username, token} = user;
    console.log(username);
    console.log(token);

    // Spread
    const updatedUser = {...user, role: 'guest' };
    console.log(updatedUser);

  }

  // ARRAYS
  ejemplosArrays(){
    // map: Transformar
    const nums = [1,2,3,4,5];
    const numsUpdated =
      nums.map((item) => item+2 );
    console.log('numsUpdated',numsUpdated);

    // filter: Filtrar elementos de un Array
    const numsFiltered =
      nums.filter(item => item!==2);
    //       nums.filter(item => item%2==0);
    console.log('numsFiltered',numsFiltered);

    // reduce: Acumula valores de un Array
    const resultReduce = nums.reduce((acu, item) =>
      acu * item, 1);
    console.log('resultReduce',resultReduce);
  }

  // TEST
  miTest(){
    const original = {title:'Camiseta', price: 20};
    const copia = original;
    copia.price = 25; // MAL

    console.log(original.price);

    const original2 = {title:'Camiseta', price: 20};
    const copia2 = { ...original2 };

    copia2.price = 50;

    console.log(original2.price);



  }

}

interface NewUser {
  username: string;
  role: Role;
  token: string
}
