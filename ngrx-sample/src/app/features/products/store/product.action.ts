import { createAction, props, UPDATE } from "@ngrx/store";
import { Product } from "../../../core/model";


export const PRODUCT_ACTION_TYPES = {
    LOAD_PRODUCTS: '[Product] Load Products',
    LOAD_PRODUCTS_SUCCESS: '[Product] Load Products Success',
    LOAD_PRODUCTS_FAILURE: '[Product] Load Products Failure',
    UPDATE_PRODUCT: '[Products API] Update Product Success',
};

export const loadProductSuccess = createAction(
    PRODUCT_ACTION_TYPES.LOAD_PRODUCTS_SUCCESS,
    props<{ products: Product[] }>()
);

export const loadProductFailure = createAction(
    PRODUCT_ACTION_TYPES.LOAD_PRODUCTS_FAILURE,
    props<{ error: string }>()
);

export const loadProducts = createAction(
    PRODUCT_ACTION_TYPES.LOAD_PRODUCTS
);

export const updateProduct = createAction(
  PRODUCT_ACTION_TYPES.UPDATE_PRODUCT,
  props<{ product: Product }>()
);