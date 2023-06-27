import { Injectable } from '@angular/core';
import { ShoppingCart } from '../interfaces/shopping-cart';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { use } from 'echarts';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  SHOPPING_CART_URL = 'http://localhost:3000/shopping-cart'

  private readonly shoppingCart$: BehaviorSubject<ShoppingCart> = new BehaviorSubject<
    ShoppingCart
  >({} as ShoppingCart);

  constructor(private readonly httpClient: HttpClient) {}

  fetchShopingCart(userId: string){
    this.httpClient
      .get<ShoppingCart>(`${this.SHOPPING_CART_URL}/${userId}`)
      .subscribe((receivedItems) => this.shoppingCart$.next(receivedItems));
  }

  getShoppingCart(): Observable<ShoppingCart>{
    return this.shoppingCart$.asObservable();
  }

  addToShoppingCart(userId: string, productId: string){
    return this.httpClient.post(`${this.SHOPPING_CART_URL}/${userId}/add/${productId}`, {userId: userId, productId: productId})
  }

}
