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

export const selectLoading = createSelector(
    selectProductState,
    (state) => state.loading
);

export const selectError = createSelector(
    selectProductState,
    (state) => state.error
);

export const selectAvailableProducts = createSelector(
    selectAllProducts,
    (products) => products.filter(product => product.available)
);