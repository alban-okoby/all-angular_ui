import { Product } from "../../../core/model";
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { from } from "rxjs";

export interface ProductState extends EntityState<Product>{
    loading: boolean;
    error: string | null;
}

export const productAdapter = createEntityAdapter<Product>({
    selectId: (product) => product.id,
    sortComparer: false
})

export const initialProductState: ProductState = 
    productAdapter.getInitialState({
        loading: false,
        error: null
});