import { createFeatureSelector, createSelector } from "@ngrx/store";
import { productFeatureKey } from "./product.reducer";
import { ProductState } from "./product.state";


export const selectProductState = 
createFeatureSelector<ProductState>(productFeatureKey);

export const selectAllProducts = createSelector(
    selectProductState, 
    (state) => state.products
);

export const selectProductCount = createSelector(
    selectProductState,
    (state) => state.products.length
);