import { Component } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [NgbAlert],
  selector: 'app-promo-banner-component',
  styleUrl: './promo-banner-component.css',
  templateUrl: './promo-banner-component.html',
})
export class PromoBannerComponent {
  cerrarAlert: boolean = true;
}
