import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Observable, Subscription, combineLatest, map } from 'rxjs';

import { ProductsService } from 'src/app/core/services/products.service';
import { ProductInterface } from 'src/app/core/types/products.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  productService = inject(ProductsService);
  subscription!: Subscription;

  products$!: Observable<ProductInterface[]>;
  showSearch$!: Observable<boolean>;
  searchText: string = '';

  constructor() {
  }

  ngOnInit(): void {
    if (this.productService.products$.getValue().length === 0) {
      this.subscription = this.productService.getProducts().subscribe({
        next: (res: ProductInterface[]) => {
          this.productService.setProduct(res);
        }
      })
    }
    this.products$ = combineLatest([
      this.productService.products$,
      this.productService.detectSearchText$,
    ]).pipe(
      map(([products, text]) => {
        if (text === '') {
          return products;
        }
        return products.filter(product => product.title.toLowerCase().includes(text.toLowerCase()))
      }),
    );

    this.showSearch$ = this.productService.showSearch$;
  }

  onSearchText(): void {
    this.productService.detectSearchText$.next(this.searchText);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
