import { Component, Input, OnInit } from '@angular/core';
import { ProductItem } from '../models/product-item';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor() { }

@Input()
product : ProductItem;

  ngOnInit(): void {
  }

}
