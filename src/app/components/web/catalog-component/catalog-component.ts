import { Component, computed, inject, signal } from '@angular/core';
import { CartItem, Product } from '../../../models/models';
import { PRODUCTS_MOCK } from '../../../models/product.mock';
import { ProductCardComponent } from '../product-card-component/product-card-component';
import { CurrencyPipe } from '@angular/common';
import { ProductFilterComponent } from '../product-filter-component/product-filter-component';
import { CartService } from '../../../services/cart-service';

@Component({
  imports: [ProductCardComponent, CurrencyPipe, ProductFilterComponent],
  selector: 'app-catalog-component',
  styleUrl: './catalog-component.css',
  templateUrl: './catalog-component.html',
})
export class CatalogComponent {
  private readonly cartService: CartService =
  inject(CartService);
  products = signal<Product[]>(PRODUCTS_MOCK);

  // EJERCICIOS SESIÓN 10
  searchTerm = signal('');
  categoryType = signal('All');

  filteredProducts = computed(() => {
    const query = this.searchTerm().toLowerCase().trim();
    const cat = this.categoryType();

    return this.products().filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(query);
      const matchesCategory = cat === 'All' || product.category === cat;
      return matchesSearch && matchesCategory;
    });
  });

  reduceStock(cartItem: CartItem) {
    this.products.update((currentProducts) =>
      currentProducts.map((prod) => {
        if (prod.id === cartItem.product.id && prod.stock > 0) {
          return { ...prod, stock: prod.stock - cartItem.quantity };
        }
        return prod;
      }),
    );
    this.cartService.addProduct(cartItem);
  }

  selectedCount = signal(0);
  lastViewedProduct = signal<Product | null>(null);

  onProductAdded(product: Product) {
    this.selectedCount.update((count) => count + 1);
    this.products.update((currentProducts) =>
      currentProducts.map((p) =>
        p.id === product.id && p.stock > 0 ? { ...p, stock: p.stock - 1 } : p,
      ),
    );
  }

  onProductDetails(product: Product) {
    this.lastViewedProduct.set(product);
  }
}
