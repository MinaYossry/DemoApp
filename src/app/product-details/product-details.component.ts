import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.mode';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter();

  getImageUrl(product: IProduct) {
    if (product === null) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }

  buyButtonClicked() {
    this.buy.emit();
  }
}
