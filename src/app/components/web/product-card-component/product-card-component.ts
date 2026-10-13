import { Component, computed, input, Input, output, signal } from '@angular/core';
import { Product } from '../../../models/models';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-product-card-component',
  styleUrl: './product-card-component.css',
  templateUrl: './product-card-component.html',
})
export class ProductCardComponent {
  product = input.required<Product>();

  stock = signal<number>(5);
  showAlert = signal<boolean>(false);

  isLowStock =
    computed(() => this.product().stock <3 &&
      this.product().stock >0);
  isOutOfStock =
    computed(() =>
      this.product().stock ===0);

  addToCart = output<Product>();
  viewDetails = output<Product>();

  decreaseStock() {
    if (this.stock() > 0) {
      this.stock.update(miStock => miStock-1);
    }
    if (this.stock() === 0) this.showAlert.set(true);
  }

  onSelectProduct(){
    this.addToCart.emit(this.product());
  }

  onViewDetails() {
    this.viewDetails.emit(this.product());
  }
}
