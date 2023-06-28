import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  productsCounter!: number;
  constructor(private readonly authService: AuthService, private readonly shoppingCartService: ShoppingCartService) {}

  logout() {
    this.authService.logout();
  }

  isAdmin: boolean = false;
  ngOnInit(): void {
      this.checkAdmin();
      this.updateShoppingCartCounter()

  }

  updateShoppingCartCounter(){
    this.shoppingCartService.fetchShopingCart(this.authService.getLocalStorageItem('id')!);
    this.shoppingCartService.getShoppingCart().subscribe((shoppingCart) => {
      this.productsCounter = shoppingCart.products.length;
    });
  }
  checkAdmin(){
    if(this.authService.getLocalStorageItem('role') === 'admin'){
      this.isAdmin = true;
    }
  }


}
