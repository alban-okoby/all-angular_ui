import { createAction, props } from "@ngrx/store";


export const PRODUCT_ACTION_TYPES = {
    LOAD_PRODUCTS: '[Product] Load Products',
    LOAD_PRODUCTS_SUCCESS: '[Product] Load Products Success',
    LOAD_PRODUCTS_FAILURE: '[Product] Load Products Failure'
};

export const loadProductSuccess = createAction(
    PRODUCT_ACTION_TYPES.LOAD_PRODUCTS_SUCCESS,
    props<{ products: any[] }>()
);

export const loadProductFailure = createAction(
    PRODUCT_ACTION_TYPES.LOAD_PRODUCTS_FAILURE,
    props<{ error: any }>()
);

export const loadProducts = createAction(
    PRODUCT_ACTION_TYPES.LOAD_PRODUCTS
);