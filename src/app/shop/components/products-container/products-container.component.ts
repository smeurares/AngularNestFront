import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss'],
})
export class ProductsContainerComponent implements OnInit {
  products: Product[] = []
  constructor(private readonly productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.fetchProducts();
    this.productsService.getProducts().subscribe(productList => {

      this.products = productList
      console.log(this.products)});

  }
}
