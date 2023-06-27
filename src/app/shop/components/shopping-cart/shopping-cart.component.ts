import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  discountCode: string = '';
  totalPrice!: number;
  discountForm!: FormGroup;
  discountApplied: boolean = false;
  loading: boolean = true;

  constructor(
    private readonly shoppingCartService: ShoppingCartService,
    private readonly authService: AuthService
  ) {}

  products: Product[] = [];

  getShoppingCartProducts() {
    const userId = this.authService.getLocalStorageItem('id')!;
    this.shoppingCartService.fetchShopingCart(userId);
    this.shoppingCartService.getShoppingCart().subscribe((cartProducts) => {
      if(cartProducts.products){
        this.products = cartProducts.products;
      } else {
        this.products = []
      }
      console.log(cartProducts)
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.getShoppingCartProducts();
    this.initializeDiscountForm();
  }

  initializeDiscountForm() {
    this.discountForm = new FormGroup({
      discountCode: new FormControl('', Validators.required),
    });
  }

  getTotalPrice(): number {
    let totalPrice = this.products.reduce(
      (total, item) => total + item.price,
      0
    );
    if (this.discountApplied) {
      totalPrice -= totalPrice * 0.1; // Apply 10% discount
    }
    return totalPrice;
  }

  applyDiscount(): void {
    if (this.discountForm.valid) {
      const discountCode = this.discountForm.get('discountCode')!.value;
      if (discountCode === 'DISCOUNT10') {
        this.discountApplied = true;
        this.discountForm.disable(); // Disable the discount form after applying the discount
      } else {
        alert('Invalid discount code!');
      }
    }
  }
}
