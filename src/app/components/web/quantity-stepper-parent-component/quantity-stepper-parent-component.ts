import { Component, signal } from '@angular/core';
import { QuantityStepperComponent } from '../quantity-stepper-component/quantity-stepper-component';

@Component({
  imports: [QuantityStepperComponent],
  selector: 'app-quantity-stepper-parent-component',
  styleUrl: './quantity-stepper-parent-component.css',
  templateUrl: './quantity-stepper-parent-component.html',
})
export class QuantityStepperParentComponent {
  orderQuantity = signal(1);
}
