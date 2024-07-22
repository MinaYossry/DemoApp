import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.mode';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: IProduct[] = [];

  constructor(private httpClient: HttpClient) {}

  add(product: IProduct) {
    this.cart.push(product);
    this.httpClient.post('/cart', product).subscribe();
    console.log(`product: ${product.name}`);
  }
}
