import { Component, inject, input, output } from '@angular/core';
import { CartService } from '../../../services/cart-service';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-cart-drawer-component',
  styleUrl: './cart-drawer-component.css',
  templateUrl: './cart-drawer-component.html',
})
export class CartDrawerComponent {
  protected readonly cartService: CartService =
    inject(CartService);
  isOpen = input<boolean>(false);
  closeDrawer = output<void>();

  onDecrement(id: string, quantity: number) {
    this.cartService.updateQuantity(id, quantity - 1);
  }
  onIncrement(id: string, quantity: number) {
    this.cartService.updateQuantity(id, quantity + 1);
  }

  onRemove(id: string) {
    this.cartService.removeItem(id);
  }

  onCheckOut() {
    alert('Compra realizada con éxito! El total es de '+
      this.cartService.totalPrice()+'€!');
    this.cartService.clearCart();
    this.closeDrawer.emit();
  }
}
