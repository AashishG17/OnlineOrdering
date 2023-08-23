import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

import { ProductDataInterface, ProductInterface } from 'src/app/core/types/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // private apiUrl = 'https://fakestoreapi.com/products';
  private apiUrl = 'https://dummyjson.com/products';

  products$ = new BehaviorSubject<ProductInterface[]>([]);
  showSearch$ = new BehaviorSubject<boolean>(true);
  detectSearchText$ = new BehaviorSubject<string>('');

  constructor(
    private http: HttpClient,
  ) { }

  getProducts(): Observable<ProductInterface[]> {
    return this.http
      .get<ProductDataInterface>(this.apiUrl)
      .pipe(map((res: ProductDataInterface) => res.products));
  }

  setProduct(product: ProductInterface[]): void {
    this.products$.next(product);
  }

  setShowSearch(): void {
    this.showSearch$.next(!this.showSearch$.getValue());
  }

  setDetectSearchText(text: string): void {
    this.detectSearchText$.next(text);
  }

}
