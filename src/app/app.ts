import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/structure/navbar/navbar';
import { Footer } from './components/structure/footer/footer';
import { CartDrawerComponent } from './components/structure/cart-drawer-component/cart-drawer-component';

@Component({
  imports: [RouterOutlet, Navbar, Footer, CartDrawerComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('01-teoria');
  isCartOpen = signal(false);
}
