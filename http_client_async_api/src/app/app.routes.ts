import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { TodoComponent } from './todo.component';
import { TodoDetailComponent } from './todo-detail.component';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
  },
  {
    path: ':id',
    component: TodoDetailComponent,
    resolve: {
      todo: ({ params }: ActivatedRouteSnapshot) => {
        const http = inject(HttpClient);
        return http.get(
          'https://jsonplaceholder.typicode.com/todos/' + params['id']
        );
      },
    },
  },
];
