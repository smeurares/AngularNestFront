import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  products: Product[] = [
    { name: 'Product 1', description: 'Description for Product 1', price: 10 },
    { name: 'Product 2', description: 'Description for Product 2', price: 15 },
    { name: 'Product 3', description: 'Description for Product 3', price: 20 },
  ];

  cartItems: Product[] = [...this.products];

  ngOnInit(): void {
    this.initializeDiscountForm();
  }

  initializeDiscountForm() {
    this.discountForm = new FormGroup({
      discountCode: new FormControl('', Validators.required),
    });
  }

  getTotalPrice(): number {
    let totalPrice = this.cartItems.reduce((total, item) => total + item.price, 0);
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
