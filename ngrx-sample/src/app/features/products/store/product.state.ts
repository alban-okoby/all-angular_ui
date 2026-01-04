import { Product } from "../../../core/model";

export interface ProductState {
    products: Product[];
}

export const initialProductState: ProductState = {
    products: []
};