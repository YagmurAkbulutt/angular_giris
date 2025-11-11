import { Component, input, linkedSignal, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  imports: [FormsModule],
  template: `
  <h4>test</h4>
<p>name : {{name()}}</p>
<input [(ngModel)]="name">
  `
})
export class TestComponent {
readonly name = model<string>('');
}
