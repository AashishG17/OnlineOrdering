import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
})
export class ReviewComponent implements OnInit {
  private router = inject(Router);
  private productService = inject(ProductsService);
  private cartService = inject(CartService);

  ngOnInit(): void {
    this.cartService.cartProducts$.next([]);
  }

  navigateToHome(): void {
    this.productService.setProduct([]);
    this.router.navigate(['/']);
  }
}
