import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-teoria5',
  styleUrl: './teoria5.css',
  templateUrl: './teoria5.html',
})
export class Teoria5 {
  elementos: number[] = [1,2,3];
  dato = 1;

  add() {
    this.elementos.push(Math.round(Math.random()*10));
  }

  remove() {
    this.elementos.pop();
  }
}
