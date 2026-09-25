import { Component } from '@angular/core';
import { CategoryInterface } from '../../../common/interfaces';

@Component({
  imports: [],
  selector: 'app-categories-list-component',
  styleUrl: './categories-list-component.css',
  templateUrl: './categories-list-component.html',
})
export class CategoriesListComponent {
categories: CategoryInterface[] = [
  {
    name: 'clothing',
    id: 1,
    icon: 'clothing.png',
    active: true
  },
  {
    name: 'electronics',
    id: 2,
    icon: 'electronics.png',
    active: true
  },
  {
    name: 'books',
    id: 3,
    icon: 'books.png',
    active: true
  },
  {
    name: 'home',
    id: 4,
    icon: 'home.png',
    active: true
  },
]
}
