import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import * as ProductActions from './product.action';
import { ProductApiService } from '../services/http-product';

@Injectable()
export class ProductEffects {
  private actions$ = inject(Actions);
  private api = inject(ProductApiService);

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      mergeMap(() =>
        this.api.getProducts().pipe(
          map(products =>
            ProductActions.loadProductSuccess({ products })
          ),
          catchError(() =>
            of(
              ProductActions.loadProductFailure({
                error: 'Error: can"t load products from server',
              })
            )
          )
        )
      )
    )
  );
}
