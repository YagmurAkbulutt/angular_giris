import { Component, computed, signal } from '@angular/core';
import {FormsModule} from "@angular/forms"

@Component({
  selector: 'app-computed',
  standalone: true,
  imports: [FormsModule],
  template: `
  <h3>Computed</h3>
  <input [(ngModel)]="num1" />
  <input [(ngModel)]="num2" />
  <h4>{{this.total()}}</h4>
  `
})
export class ComputedComponent {
  readonly num1 = signal<number>(5);
  readonly num2 = signal<number>(10);
  readonly total = computed(() => +this.num1() + +this.num2())
  readonly total1 = computed(() => +this.num1() * 2 );
  readonly total2 = computed(() => {
    console.log(this.num1())

    return +this.num1() * 2
  })

  // set ve update , computedda çalışmaz

}
