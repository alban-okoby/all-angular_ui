import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../../core/model';
import * as ProductSelectors from '../store/product.selector';
import * as ProductActions from '../store/product.action';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit {
  private store = inject(Store);

  products$: Observable<Product[]> =
    this.store.select(ProductSelectors.selectAllProducts);

  count$: Observable<number> =
    this.store.select(ProductSelectors.selectProductCount);

  ngOnInit(): void {
    this.store.dispatch(ProductActions.loadProductSuccess(
      {
        products: [
          {
            id: '1',
            name: 'MacBook Pro',
            price: 2500,
            category: 'Tech',
            available: true,
          },
          {
            id: '2',
            name: 'iPhone 15',
            price: 1200,
            category: 'Tech',
            available: true,
          },
        ]
      }
    ));
  }
}
