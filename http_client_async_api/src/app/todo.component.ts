import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
  <ul>
    @for(val of todos; track val){
        <li>{{val.title}} <button [routerLink]="['/', val.id]">Detail</button></li>
    }
  </ul>
  
  `
})
export class TodoComponent {
    todos: any[] = []
    readonly #http = inject(HttpClient);

    constructor(){
        this.get();
    }

    async get(){
        const endpoint = "https://jsonplaceholder.typicode.com/todos"
        var res = await lastValueFrom(this.#http.get<any[]>(endpoint));
        this.todos = res;
    }
}
