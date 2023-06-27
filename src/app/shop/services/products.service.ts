import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  PRODUCTS_URL = 'http://localhost:3000/products';

  private readonly products$: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);

  constructor(private readonly httpClient: HttpClient) {}

  fetchProducts() {
    this.httpClient
      .get<Product[]>(this.PRODUCTS_URL)
      .subscribe((receivedItems) => this.products$.next(receivedItems));
  }

  getProducts(): Observable<Product[]> {
    return this.products$.asObservable();
  }

  addProduct(product: Product){
    return this.httpClient.post<Product>(this.PRODUCTS_URL, product);
  }

  addManyProducts(products: Product[]){
    return this.httpClient.post<Product[]>(`${this.PRODUCTS_URL}/csv`, products)
  }

}
