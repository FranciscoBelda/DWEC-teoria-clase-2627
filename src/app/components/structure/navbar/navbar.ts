import { Component, inject, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../../services/cart-service';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  protected readonly cartService: CartService = inject(CartService);
  openCart = output<void>();

  onOpenCart() {
    this.openCart.emit();
  }
}
