import { Component, effect, signal } from '@angular/core';
import {FormsModule} from "@angular/forms"

@Component({
  selector: 'app-effect',
  standalone: true,
  imports: [FormsModule],
  template: `
  <h3>Effect</h3>
  <input [(ngModel)]="num1" />
  <input [(ngModel)]="num2" />
  `
})
export class EffectComponent {
  readonly num1 = signal<number>(5);
  readonly num2 = signal<number>(10);

  constructor(){
    effect(() => {
        console.log("çalışıyor") // hemen çalışır
        console.log(this.num1()) // koşula bağlı olarak o kodu çalıştırır 
    })
  }

}
