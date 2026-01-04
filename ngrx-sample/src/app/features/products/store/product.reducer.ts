import { createReducer, on } from "@ngrx/store";
import { initialProductState } from "./product.state";
import * as ProductActions from "./product.action";


export const productFeatureKey = 'products';

export const productReducer = createReducer(
    initialProductState,

    on(ProductActions.loadProductSuccess, (state, { products }) => ({
        ...state,
        products,
    }))
);
