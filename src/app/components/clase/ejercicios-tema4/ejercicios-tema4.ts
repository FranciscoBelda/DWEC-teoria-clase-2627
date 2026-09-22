import { Component, OnInit } from '@angular/core';
import { CartItem, CategoryType, Product } from '../../../models/models';

@Component({
  imports: [],
  selector: 'app-ejercicios-tema4',
  styleUrl: './ejercicios-tema4.css',
  templateUrl: './ejercicios-tema4.html',
})
export class EjerciciosTema4 implements OnInit {
  products: Product[] = [
    {
      id: '1',
      title: 'Camiseta',
      price: 18,
      description: 'Camiseta molona',
      category: 'clothing',
      imageUrl: 'imagenCamiseta.jpg',
      rating: {
        count: 123,
        rate: 5,
      },
    },
    {
      id: '2',
      title: 'Radio',
      price: 28,
      description: 'Radio guapa',
      category: 'electronics',
      imageUrl: 'radio.jpg',
      rating: {
        count: 31,
        rate: 4,
      },
    },
  ];

  filterProductsByCategory(products: Product[], category: CategoryType): Product[] {
    return products.filter((product) => category === product.category);
  }

  applyDiscount(products: Product[], percentage: number): Product[] {
    return products.map((product) => {
      product.price = (product.price / percentage) * 100;
      return product;
    });
  }

  ngOnInit() {
    this.applyDiscount(this.filterProductsByCategory(
      this.products,
      'electronics'),10);
  }

  // Ejercicio 4.2 Operaciones del carrito
  // Calcular el total de productos añadidos (la suma de las cantidades)
  calcularTotal(cartItems: CartItem[]):number {
    return cartItems.reduce((acu, item) =>
      acu + item.quantity,0
    )
  }

  // Calcular el importe total de la compra (precio * cantidad de cada ítem)
  calcularTotalPrice(cartItems: CartItem[]):number {
    return cartItems.reduce((acu, item) =>
      acu + item.product.price * item.quantity,0
    )
  }

  // Simular la adición de un producto al carrito de forma inmutable
  addToCart(newItem: CartItem, cartItems: CartItem[]):CartItem[] {
    const exists = cartItems.find(item =>
      item.product.id === newItem.product.id
    )

    if (exists) {
      return cartItems.map((item) =>
        item.product.id === newItem.product.id ?
          {...item, quantity: newItem.quantity + item.quantity } :
          item
      )
    }else {
      return [...cartItems, newItem];
    }



  }
}
