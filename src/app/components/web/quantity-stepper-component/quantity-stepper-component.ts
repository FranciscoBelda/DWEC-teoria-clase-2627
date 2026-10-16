import { Component, input, model } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-quantity-stepper-component',
  styleUrl: './quantity-stepper-component.css',
  templateUrl: './quantity-stepper-component.html',
})
export class QuantityStepperComponent {
  quantity = model.required<number>();
  maxStock = input<number>(Infinity);


  decrement() {
    if (this.quantity() > 1) {
      this.quantity.update(val => val -1);
    }
  }
  increment() {
      this.quantity.update(val => val + 1);
  }

}
