import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
  <p>{{lastName}}</p>
  `
})
export class AppComponent {
  readonly name = signal<string>("");
  lastName = "";

  readonly cdr = inject(ChangeDetectorRef);

  constructor(){
    this.cdr.detectChanges() // sayfadaki değişikikleri html-ts tarafına aktarır. manuel olarak tetikleme
  }
}
