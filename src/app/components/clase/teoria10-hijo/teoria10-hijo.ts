import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-teoria10-hijo',
  styleUrl: './teoria10-hijo.css',
  templateUrl: './teoria10-hijo.html',
})
export class Teoria10Hijo {
  // ANTIGUAMENTE EN ANGULAR ...
  @Input() quantity: number = 1;
  @Output() quantityChange =
    new EventEmitter<number>();

  // HOY EN DÍA EN ANGULAR
  quantityModern = model.required<number>();

  // ANTIGUAMENTE EN ANGULAR ...
  updateQuantity(quantity: number) {
    this.quantityChange.emit(quantity);
  }

  updateQuantityModern(quantity: number) {
    this.quantityModern.update(data => data + quantity);
  }
}
