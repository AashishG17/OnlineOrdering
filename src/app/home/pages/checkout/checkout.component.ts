import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CartService } from 'src/app/core/services/cart.service';
import { ProductInterface } from 'src/app/core/types/products.interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private fb = inject(FormBuilder);

  checkoutForm!: FormGroup;cartService = inject(CartService);
  cartProducts: ProductInterface[] = [];
  subscription: Subscription[] = [];
  total: number = 0;
  subtotal: number = 0;

  ngOnInit(): void {
    this.buildCheckoutForm();
    this.getCartProducts();
  }

  buildCheckoutForm(): void {
    this.checkoutForm = this.fb.group({
      full_name: ['', Validators.required],
      address: ['', Validators.required],
      card_number: ['', Validators.required],
      expiry_date: ['', Validators.required],
    });
  }

  getCartProducts(): void {
    this.subscription.push(
      this.cartService.cartProducts$.subscribe({
        next: (res) => {
          this.cartProducts = res;
          this.calculate();
        },
      }),
    );
  }

  calculate(): void {
    this.subtotal = this.cartProducts.reduce((sum, product) => sum + product.price, 0);
    this.total = this.subtotal + (13 * this.subtotal / 100)
  }

  onCheckout() {
    if (this.checkoutForm.invalid) {
      return this.checkoutForm.markAllAsTouched();
    }
    const checkout = {
      form_details: this.checkoutForm.value,
      cart_products: this.cartProducts,
      total: this.total,
    }
    console.log(checkout);
    this.router.navigate(['/review']);
  }

  ngOnDestroy(): void {
    this.subscription.forEach(subscription => subscription.unsubscribe());
  }

}
