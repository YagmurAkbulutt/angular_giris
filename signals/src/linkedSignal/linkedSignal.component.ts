import { Component, computed, linkedSignal, signal } from '@angular/core';
import {FormsModule} from "@angular/forms"

@Component({
  selector: 'app-linkedSignal',
  standalone: true,
  imports: [FormsModule],
  template: `
  <h3>Linked Signal</h3>
  <input [(ngModel)]="num1" />
  <input [(ngModel)]="num2" />
  <h4>{{this.total()}}</h4>
  `
})
export class LinkedSignalComponent {
  readonly num1 = signal<number>(5);
  readonly num2 = signal<number>(10);
  readonly total = linkedSignal(() => {
    console.log("num1 :"  + this.num1())
    console.log("num2 :"  + this.num2())
    
    return +this.num1() * + this.num2()
  })

  constructor(){
    this.total.set(15);
    this.total.update(() => 20)
  }

// computed gibi çalışır, set ve update çalışır
}
