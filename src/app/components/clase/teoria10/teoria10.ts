import { Component, signal } from '@angular/core';
import { Teoria10Hijo } from '../teoria10-hijo/teoria10-hijo';

@Component({
  imports: [Teoria10Hijo],
  selector: 'app-teoria10',
  styleUrl: './teoria10.css',
  templateUrl: './teoria10.html',
})
export class Teoria10 {
  // AHORA EN ANGULAR...
  data = signal<number>(5);

  // ANTIGUAMENTE EN ANGULAR...
  recogerDato(event: number) {
    console.log('Dato antiguo',event);
  }
}
