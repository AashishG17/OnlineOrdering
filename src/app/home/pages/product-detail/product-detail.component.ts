import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, find, map } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';

import { ProductsService } from 'src/app/core/services/products.service';
import { ProductInterface } from 'src/app/core/types/products.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductsService);
  private cartService = inject(CartService);

  public productDetails!:ProductInterface;
  private subscription: Subscription[] = [];

  ngOnInit(): void {
    this.getProductDetails();
  }

  private getProductDetails(): void {
    const slug = this.route.snapshot.params['slug'];
    this.productService
      .products$
      .pipe(map(products => products
        .filter(product => product.title === slug)[0]
      ))
      .subscribe({
        next: (res: ProductInterface) => {
          this.productDetails = res;
        }
      });
  }

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

  calculateDiscount(price: number | undefined, discount: number | undefined): number {
    if (price && discount) {
      return Math.floor(price + price * discount / 100);
    }
    return 0;
  }

  ngOnDestroy(): void {
    this.subscription.forEach(subscription => subscription.unsubscribe());
  }
}
