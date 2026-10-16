import { Component, model } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-quantity-stepper-component',
  styleUrl: './quantity-stepper-component.css',
  templateUrl: './quantity-stepper-component.html',
})
export class QuantityStepperComponent {
  value = model.required<number>();

  decrement() {
    if (this.value() > 1) {
      this.value.update(val => val -1);
    }
  }
  increment() {
      this.value.update(val => val + 1);
  }

}
