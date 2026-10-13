import { Component, signal } from '@angular/core';
import { Product } from '../../../models/models';
import { PRODUCTS_MOCK } from '../../../models/product.mock';
import { ProductCardComponent } from '../product-card-component/product-card-component';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [ProductCardComponent, CurrencyPipe],
  selector: 'app-catalog-component',
  styleUrl: './catalog-component.css',
  templateUrl: './catalog-component.html',
})
export class CatalogComponent {
  products = signal<Product[]>(PRODUCTS_MOCK);

  reduceStock(product: Product) {
    this.products.update((currentProducts) =>
      currentProducts.map((prod) => {
        if (prod.id === product.id && prod.stock > 0) {
          return { ...prod, stock: prod.stock - 1 };
        }
        return prod;
      }),
    );
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
