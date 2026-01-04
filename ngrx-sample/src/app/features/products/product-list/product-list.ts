import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
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

  products$: Observable<Product[]> = this.store.select(ProductSelectors.selectAllProducts);
  loading$ = this.store.select(ProductSelectors.selectLoading);
  error$ = this.store.select(ProductSelectors.selectError);

  count$: Observable<number> =
    this.store.select(ProductSelectors.selectProductTotal);

  ngOnInit(): void {
    this.loadAllProducts();
  }

  /**
   * Load all products
   */
  loadAllProducts() {
    this.store.dispatch(ProductActions.loadProducts());
  }

}
