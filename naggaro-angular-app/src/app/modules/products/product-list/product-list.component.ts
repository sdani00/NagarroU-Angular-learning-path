import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../models/product-item';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: ProductItem[];

  constructor() {}

  ngOnInit(): void {
    let productAsString = localStorage.getItem('Products');

    this.products = <ProductItem[]>JSON.parse(productAsString);
  }
}
