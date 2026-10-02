import { Component, Input, signal } from '@angular/core';
import { Product } from '../../../models/models';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-product-card-component',
  styleUrl: './product-card-component.css',
  templateUrl: './product-card-component.html',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  stock = signal<number>(5);
  showAlert = signal<boolean>(false);


  decreaseStock() {
    if (this.stock() > 0) {
      this.stock.update(miStock => miStock-1);
    }
    if (this.stock() === 0) this.showAlert.set(true);
  }
}
