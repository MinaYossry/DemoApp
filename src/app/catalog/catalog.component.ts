import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IProduct } from './product.mode';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CartService } from '../cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ProductDetailsComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CatalogComponent implements OnInit {
  products: IProduct[] = [];
  filter: string = '';
  constructor(
    private cartService: CartService,
    private productsServic: ProductService
  ) {}

  ngOnInit(): void {
    this.productsServic.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  getFilteredProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter((prod: any) => prod.category === this.filter);
  }

  addToCart(product: IProduct) {
    this.cartService.add(product);
  }
}
