import { Component, computed, effect, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-cart-summary',
  styleUrl: './cart-summary.css',
  templateUrl: './cart-summary.html',
})
export class CartSummary {
  itemsCount = signal(1);
  unitPrice = signal(50);
  couponDiscount = signal(10);

  rawSubtotal = computed(() => this.itemsCount() * this.unitPrice());

  discountAmmount = computed(() => (this.rawSubtotal() * this.couponDiscount()) / 100);

  taxAmmount = computed(() =>
    (this.rawSubtotal() - this.discountAmmount()) * 0.21);

  grandTotal = computed(() => this.rawSubtotal() - this.discountAmmount() + this.taxAmmount());

  // PRACTICA 2
  constructor() {
    effect(() => {
      console.log('GrandTotal: ', this.grandTotal());
      console.log('ItemsCount: ', this.itemsCount());

      const cartState = {
        items: this.itemsCount(),
        price: this.unitPrice(),
        discount: this.couponDiscount(),
        total: this.grandTotal(),
      };
      localStorage.setItem('digishop_cart', JSON.stringify(cartState));
      const miCart = JSON.parse(localStorage.getItem('digishop_cart') as string);
      console.log('Carrito guardado', miCart);
    });
  }


  incrementItems() {
    this.itemsCount.update(n => n+1);
  }

  applySpecialCoupon() {
    this.couponDiscount.set(25);
  }
}
