import { Routes } from "@angular/router";
import { ProductList } from "./product-list/product-list";

export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    component: ProductList,
    title: 'Product List',
  },
];