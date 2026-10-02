import { Component } from '@angular/core';
import { Product } from '../../../models/models';
import { PRODUCTS_MOCK } from '../../../models/product.mock';
import { ProductCardComponent } from '../product-card-component/product-card-component';

@Component({
  imports: [ProductCardComponent],
  selector: 'app-catalog-component',
  styleUrl: './catalog-component.css',
  templateUrl: './catalog-component.html',
})
export class CatalogComponent {
  products: Product[] = PRODUCTS_MOCK;
}
