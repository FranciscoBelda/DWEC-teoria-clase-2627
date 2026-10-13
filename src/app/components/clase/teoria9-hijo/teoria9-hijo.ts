import { booleanAttribute, Component, computed, effect, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-teoria9-hijo',
  styleUrl: './teoria9-hijo.css',
  templateUrl: './teoria9-hijo.html',
})
export class Teoria9Hijo {
  productCategory =
    input<string>('No category');
  productName = input.required<string>();
  price = input.required<number>();
  productId = input.required<number>();

  disabled =
    input<boolean>(false,
      { transform: booleanAttribute });

  priceWithTaxes =
    computed(() => this.price() * 1.21);

  constructor() {
    effect(() => {
      console.log(this.priceWithTaxes());
    });
  }

  // OUTPUT
  onAddToCart = output<number>();

  addToCart(productId: number) {
    this.onAddToCart.emit(productId);
  }
}
