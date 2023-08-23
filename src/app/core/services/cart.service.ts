import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductInterface } from '../types/products.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts$ = new BehaviorSubject<ProductInterface[]>([]);

  constructor() { }

  addToCart(product: ProductInterface): void {
    const updatedCart: ProductInterface[] = [
      ...this.cartProducts$.getValue(),
      product,
    ]
    this.cartProducts$.next(updatedCart);
  }

  removeFromCart(productId: number): void {
    const updatedProduct: ProductInterface[] = this.cartProducts$
      .getValue()
      .filter(product => product.id !== productId);
    this.cartProducts$.next(updatedProduct);
  }

  increaseQuantity(product: ProductInterface): void {
    const updatedProduct: ProductInterface[] = this.cartProducts$
      .getValue()
      .map(cartProduct => {
        if (product.id === cartProduct.id) {
          return { ...product, quantity: product.quantity }
        }
        return product
      });
    this.cartProducts$.next(updatedProduct);
  }

  decreaseQuantity(product: ProductInterface): void {
    const updatedProduct: ProductInterface[] = this.cartProducts$
      .getValue()
      .map(cartProduct => {
        if (product.id === cartProduct.id) {
          return { ...product, quantity: product.quantity }
        }
        return product
      });
    this.cartProducts$.next(updatedProduct);
  }
}
