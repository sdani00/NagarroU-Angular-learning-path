import { Injectable } from '@angular/core';
import {
  CanActivate,
} from '@angular/router';

@Injectable()
export class CanActivateProductList implements CanActivate {

  constructor() {}

  canActivate() {
    if (localStorage.getItem('Products')) {
      return true;
    }

    alert('Product list is empty');
    return false;
  }
}
