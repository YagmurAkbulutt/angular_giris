import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms"

export class UserModel{
  name: string = "";
  age: number = 0;
  email: string = "";
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  template: `
  <!-- <input [(ngModel)]="name" type="text">
  <input [(ngModel)]="user().name" type="text">
  <p>{{name()}}</p>
  <p>{{user().name}}</p>
  <p>{{user().age}}</p>
  <p>{{user().email}}</p> -->
  <router-outlet></router-outlet>

  `
})
export class AppComponent {
  readonly name = signal<string>("default değer");
  readonly user = signal<UserModel>(new UserModel());
  readonly users = signal<UserModel[]>([]);


  constructor(){
    // this.name.set("asdas"); // yeni değer set eder
    // this.name.update(prev => prev + "son"); //mevcut değeri günceller

    // this.user.set(new UserModel());
    // this.user.set({name: "", age:10, email:""});
    // const userVariable = new UserModel();
    // userVariable.name = "";
    // userVariable.age = 10;
    // userVariable.email = "",
    // this.user.set(userVariable);

    // this.user.update(prev => ({...prev, age:15, isActive: true}))

    const users: UserModel[] = [];
    this.users.set(users);
    const userVariable = new UserModel();
    this.users.update(prev => [...prev, userVariable]);

  }
}
