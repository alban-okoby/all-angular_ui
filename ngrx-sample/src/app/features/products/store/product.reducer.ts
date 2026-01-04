import { createReducer, on } from "@ngrx/store";
import { productAdapter, initialProductState } from "./product.state";
import * as ProductActions from "./product.action";


export const productFeatureKey = 'products';

export const productReducer = createReducer(
    initialProductState,

    on(ProductActions.loadProducts, (state) => ({
        ...state,
        loading: true,
        error: null
    })),

    on(ProductActions.loadProductSuccess, (state, { products }) =>
        productAdapter.setAll(products, {
            ...state,
            loading: false,
        })),

    on(ProductActions.loadProductFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),

    on(ProductActions.updateProduct, (state, { product }) =>
        productAdapter.updateOne(
            { id: product.id, changes: product },
            state
        )
    )
);
