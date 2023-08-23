import { Component, Input, inject } from '@angular/core';

import { ProductInterface } from 'src/app/core/types/products.interface';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input('product') productProps!: ProductInterface;

  cartService = inject(CartService);

  onAddToCart(product: ProductInterface): void {
    product.updateCart = true;
    product.quantity = 1;
    this.cartService.addToCart(product);
  }

  onRemoveFromCart(product: ProductInterface): void {
    product.updateCart = false;
    product.quantity = 0;
    this.cartService.removeFromCart(product.id);
  }

  onDecrease(product: ProductInterface): void {
    product.quantity && product.quantity--;
    this.cartService.decreaseQuantity(product);
  }

  onIncrease(product: ProductInterface): void {
    product.quantity && product.quantity++;
    this.cartService.increaseQuantity(product);
  }

}
