import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/layout/layout.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('../pages/home/home.component'),
      },
      {
        path: 'products',
        loadChildren: () => import("../pages/products/router").then(r => r.routes)
      },
    ],
  },
];
