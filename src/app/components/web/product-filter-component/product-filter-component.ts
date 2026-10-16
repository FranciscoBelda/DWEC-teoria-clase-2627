import { Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-product-filter-component',
  styleUrl: './product-filter-component.css',
  templateUrl: './product-filter-component.html',
})
export class ProductFilterComponent {
  searchQuery = model<string>('');
  selectedCategory = model<string>('All');

  categories =
    input<string[]>(['All','electronics','clothing','books','home']);

}
