import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss'],
})
export class ProductsContainerComponent {
  products: Product[] = [
    {
      id: '1',
      name: 'produs1',
      description: 'this is a product',
      price: 200,
      isInStock: false,
      imageUrl: "https://picsum.photos/200/300?random=1"
    },
    {
      id: '2',
      name: 'produs2',
      description: 'this is a product',
      price: 300,
      isInStock: true,
      imageUrl: "https://picsum.photos/200/300?random=2"
    },
    {
      id: '3',
      name: 'produs3',
      description: 'this is a product',
      price: 400,
      isInStock: false,
      imageUrl: "https://picsum.photos/200/300?random=3"
    },
    {
      id: '4',
      name: 'produs4',
      description: 'this is a product',
      price: 400,
      isInStock: true,
      imageUrl: "https://picsum.photos/200/300?random=4"
    },
    {
      id: '1',
      name: 'produs1',
      description: 'this is a product',
      price: 200,
      isInStock: false,
      imageUrl: "https://picsum.photos/200/300?random=1"
    },
    {
      id: '2',
      name: 'produs2',
      description: 'this is a product',
      price: 300,
      isInStock: true,
      imageUrl: "https://picsum.photos/200/300?random=2"
    },
    {
      id: '3',
      name: 'produs3',
      description: 'this is a product',
      price: 400,
      isInStock: false,
      imageUrl: "https://picsum.photos/200/300?random=3"
    },
    {
      id: '4',
      name: 'produs4',
      description: 'this is a product',
      price: 400,
      isInStock: true,
      imageUrl: "https://picsum.photos/200/300?random=4"
    },
    {
      id: '1',
      name: 'produs1',
      description: 'this is a product',
      price: 200,
      isInStock: false,
      imageUrl: "https://picsum.photos/200/300?random=1"
    },
    {
      id: '2',
      name: 'produs2',
      description: 'this is a product',
      price: 300,
      isInStock: true,
      imageUrl: "https://picsum.photos/200/300?random=2"
    },
    {
      id: '3',
      name: 'produs3',
      description: 'this is a product',
      price: 400,
      isInStock: false,
      imageUrl: "https://picsum.photos/200/300?random=3"
    },
    {
      id: '4',
      name: 'produs4',
      description: 'this is a product',
      price: 400,
      isInStock: true,
      imageUrl: "https://picsum.photos/200/300?random=4"
    },
  ];
}
