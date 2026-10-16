import { Component, computed, input, Input, output, signal } from '@angular/core';
import { CartItem, Product } from '../../../models/models';
import { CurrencyPipe } from '@angular/common';
import { QuantityStepperComponent } from '../quantity-stepper-component/quantity-stepper-component';

@Component({
  imports: [CurrencyPipe, QuantityStepperComponent],
  selector: 'app-product-card-component',
  styleUrl: './product-card-component.css',
  templateUrl: './product-card-component.html',
})
export class ProductCardComponent {
  product = input.required<Product>();

  stock = signal<number>(5);
  showAlert = signal<boolean>(false);

  isLowStock = computed(() => this.product().stock < 3 && this.product().stock > 0);
  isOutOfStock = computed(() => this.product().stock === 0);

  addToCart =
    output<CartItem>();
  viewDetails = output<Product>();
  selectedQuantity = signal(1);

  decreaseStock() {
    if (this.stock() > 0) {
      this.stock.update((miStock) => miStock - 1);
    }
    if (this.stock() === 0) this.showAlert.set(true);
  }

  onSelectProduct() {
    this.addToCart.emit({
      product: this.product(),
    quantity: this.selectedQuantity()});
    this.selectedQuantity.set(1);
  }

  onViewDetails() {
    this.viewDetails.emit(this.product());
  }
}
