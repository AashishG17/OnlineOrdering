import { Component, OnInit, inject } from '@angular/core';

import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  cartService = inject(CartService);

  ngOnInit(): void {
    this.cartService.cartProducts$.next([]);
  }
}
