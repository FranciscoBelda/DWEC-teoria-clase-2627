import { Component, Input } from '@angular/core';
import { Product } from '../../../models/models';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-product-card-component',
  styleUrl: './product-card-component.css',
  templateUrl: './product-card-component.html',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
}
