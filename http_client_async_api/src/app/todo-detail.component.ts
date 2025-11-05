import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  imports: [],
  template: `
  <p>Title: {{todo.title}}</p>
  <p>Completed: {{todo.completed}}</p>
  <p>User Id: {{todo.userId}}</p>
  `
})
export class TodoDetailComponent {
  @Input() todo: any;

  // readonly #activated = inject(ActivatedRoute);
  // readonly #http = inject(HttpClient);


  // constructor(){
  //   this.#activated.params.subscribe(res => {
  //     const id = res["id"];
  //     this.#http.get(`https://jsonplaceholder.typicode.com/todos/${id}`).subscribe(res => {
  //       this.todo = res;
  //     })
  //   }) 
  // }

}
