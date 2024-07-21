import { Component } from '@angular/core';
import { IProduct } from '../catalog/product.mode';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  product!: IProduct;

  getImageUrl(product: IProduct) {
    if (product === null) return '';
    return '/assets/images/robot-parts/' + product;
  }
}
