import { Routes } from "@angular/router";

export const routes: Routes = [
    {
            path: '',
            loadComponent: () => import('./products.component'),
          },
          {
            path: 'create',
            loadComponent: () =>
              import(
                './create-product/create-product.component'
              ),
          },
]