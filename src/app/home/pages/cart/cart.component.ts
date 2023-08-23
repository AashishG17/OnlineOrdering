import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from 'src/app/core/services/cart.service';
import { ProductInterface } from 'src/app/core/types/products.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit, OnDestroy {
  cartService = inject(CartService);

  cartProducts: ProductInterface[] = [];
  subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = this.cartService.cartProducts$.subscribe({
      next: (res) => {
        this.cartProducts = res;
      },
    });
  }

  onRemoveFromCart(product: ProductInterface): void {
    product.updateCart = false;
    product.quantity = 0;
    this.cartService.removeFromCart(product.id);
  }

  onDecrease(product: ProductInterface): void {
    if (product.quantity && product.quantity > 1) {
      product.quantity && product.quantity--;
      this.cartService.decreaseQuantity(product);
    }
  }

  onIncrease(product: ProductInterface): void {
    console.log('before', product)
    const productCopy = { ...product };
    productCopy.quantity && productCopy.quantity++;
    this.cartService.increaseQuantity(productCopy);
    console.log('after', product)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
