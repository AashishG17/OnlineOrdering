import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';

import { ProductsService } from 'src/app/core/services/products.service';
import { ProductInterface } from 'src/app/core/types/products.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  productService = inject(ProductsService);
  cartService = inject(CartService);

  cartProduct!: Observable<ProductInterface[]>;
  subscription: Subscription[] = [];
  
  constructor() {
    this.subscription.push(
      this.productService.getProducts().subscribe({
        next: (res: ProductInterface[]) => {
          this.productService.setProduct(res);
        }
      }),
    );
  }

  ngOnInit(): void {
    this.cartProduct = this.cartService.cartProducts$;
  }

  toggleSearch(): void {
    this.productService.setShowSearch();
    if (!this.productService.showSearch$.getValue()) {
      this.productService.setDetectSearchText('');
    }
  }

  ngOnDestroy(): void {
    this.subscription.forEach(subscription => subscription.unsubscribe());
  }
}
