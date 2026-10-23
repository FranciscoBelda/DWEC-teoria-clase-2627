import { computed, effect, Service, signal } from '@angular/core';
import { CartItem } from '../models/models';

const STORAGE_KEY = 'digishop_cart_v1';
@Service()
export class CartService {
  #items =
    signal<CartItem[]>(this.#loadFromStorage());
  readonly items = this.#items.asReadonly();
  readonly totalItems = computed(() =>
    this.#items().reduce((acu, item) =>
      acu + item.quantity, 0));
  readonly totalPrice = computed(() =>
    this.#items().reduce((acu, item) =>
      acu + (item.quantity*item.product.price), 0));


  constructor() {
    effect(() => {
      const currentCart = this.#items();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(currentCart));
    });
  }


  addProduct(cartItem: CartItem){
    this.#items.update(items => {
      const index = items.findIndex(item =>
        item.product.id === cartItem.product.id);

      if ( index > -1){
        return items.map((item, ind) =>
        ind === index ?
          {...item, quantity: item.quantity + cartItem.quantity}
          : item
        )
      }
      return [...items, cartItem];
    })
  }

  updateQuantity(productId: string, newQuantity: number){
    if (newQuantity <= 0){
      this.removeItem(productId);
      return;
    }
    this.#items.update(items =>
      items.map(item =>
    item.product.id === productId ?
      {...item, quantity: newQuantity} : item))
  }

  #loadFromStorage(): CartItem[]{
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    try{
      return JSON.parse(raw);
    }catch {
      return [];
    }
  }

  removeItem(productId: string) {
    this.#items.update(items => items.filter(
      item => item.product.id !== productId
    ))
  }

  clearCart(){
    this.#items.set([]);
  }
}
