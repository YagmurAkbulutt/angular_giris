import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms"

@Component({
  selector: 'app-root',
  imports: [FormsModule, ReactiveFormsModule],
  template: `
  <!-- NGFORM -->
  <!-- <form #saveForm="ngForm" (ngSubmit)="save(saveForm)" autocomplete="off">
  <div>
    Title
    <input ngModel name="title" type="text" required minlength="3"> -->
    <!-- <input [(ngModel)]="todo.title" name="title" type="text" required minlength="3">  -->
  <!-- </div>
    <div>
    Completed
    <input ngModel name="completed" type="checkbox">
  </div>
  <div>
    <button type="submit">Save </button>
  </div>
  </form> -->

    <!-- REACTIVE FORM -->
  <form [formGroup]="group" (ngSubmit)="save()" autocomplete="off">
  <div>
    Title
    <input formControlName="title" name="title">
  </div>
    <div>
    Completed
    <input formControlName="completed" name="completed" type="checkbox">
  </div>
  <div>
    <button type="submit">Save </button>
  </div>
  </form>
  `

})
export class AppComponent {
  //NgForm
  // todo:{title:string, completed:boolean} = {title:'', completed:false}
  // save(form: NgForm){
  //   if(!form.valid){
  //     alert("not valid");
  //     return;
  //   }
  //   console.log(form.value)
  // }

  // REACTIVE FORM
  controls : any = {
    title: new FormControl("", [Validators.required, Validators.minLength(3)]),
    completed: new FormControl(false)
  }

  group = new FormGroup(this.controls)

  constructor(){
    this.group.setValue({title: "default değer", completed: false});
    this.group.controls["title"].setValue("değer 2")

  }

  save(){
    console.log(this.group.valid);
    this.group.reset();

  }
}
