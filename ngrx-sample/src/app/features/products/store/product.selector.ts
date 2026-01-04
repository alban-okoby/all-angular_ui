import { createFeatureSelector, createSelector } from "@ngrx/store";
import { productFeatureKey } from "./product.reducer";
import { productAdapter, ProductState } from "./product.state";


export const selectProductState = 
createFeatureSelector<ProductState>(productFeatureKey);

export const {
  selectAll: selectAllProducts,
  selectEntities: selectProductEntities,
  selectIds: selectProductIds,
  selectTotal: selectProductTotal,
} = productAdapter.getSelectors(selectProductState);

export const selectProductById = (id: string) =>
  createSelector(
    selectProductEntities,
    (entities) => entities[id]
  );
  
export const selectLoading = createSelector(
    selectProductState,
    (state) => state.loading
);

export const selectError = createSelector(
    selectProductState,
    (state) => state.error
);