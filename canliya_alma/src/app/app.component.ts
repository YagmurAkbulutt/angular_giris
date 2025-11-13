import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { enviroment } from '../enviroment/enviroment.dev';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterLink],
  template:`
  <h1>My App</h1>
  <a routerLink="/c1">C1 component</a> || <a routerLink="/c2">C2 component</a>
    <router-outlet></router-outlet>
  <button (click)="getList()">Api İsteği</button>
  <hr>
  <ul>
    <li *ngFor="let todo of todos">{{todo.title}}</li>
  </ul>

  `
})
export class AppComponent {
  todos: any[] = [];

  constructor(
        private _http: HttpClient
  ){}

  getList(){
    this._http.get(enviroment.api + "todos").subscribe((res:any) => {
      this.todos = res;
    })
  }
}
