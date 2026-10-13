import { Component, signal } from '@angular/core';
import { Teoria9Hijo } from '../teoria9-hijo/teoria9-hijo';

@Component({
  imports: [Teoria9Hijo],
  selector: 'app-teoria9',
  styleUrl: './teoria9.css',
  templateUrl: './teoria9.html',
})
export class Teoria9 {
  productId = signal<number>(0);
  onAddToCart(event: number) {
    this.productId.set(event);
  }
}
