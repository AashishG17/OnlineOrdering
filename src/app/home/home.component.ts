import { Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { Observable, combineLatest, map } from 'rxjs';

import { ProductsService } from 'src/app/core/services/products.service';
import { ProductInterface } from 'src/app/core/types/products.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {
  productService = inject(ProductsService);

  products$!: Observable<ProductInterface[]>;
  showSearch$!: Observable<boolean>;
  searchText: string = '';

  constructor() {
  }

  ngOnInit(): void {
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
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changed!!!')
  }

  onSearchText(): void {
    this.productService.detectSearchText$.next(this.searchText);
  }

}
