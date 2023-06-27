import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product!: Product;

  constructor(
    private readonly shoppingCartService: ShoppingCartService,
    private notification: NzNotificationService,
    private readonly authService: AuthService
  ) {}

  addProductToCart() {
    const userId = this.authService.getLocalStorageItem('id')!;
    this.shoppingCartService
      .addToShoppingCart(userId, this.product._id!)
      .subscribe(() =>
        this.notification.create(
          'success',
          `${this.product.name} was added to cart`,
          ''
        )
      );
  }
}
