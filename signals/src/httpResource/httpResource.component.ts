import { httpResource } from '@angular/common/http';
import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-httpResource',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <h3>HTTP Resource</h3>

    <button (click)="result.reload()">Yeniden Yükle</button>
    <input type="number" [(ngModel)]="num1" />
    @if (loading()) {
      <p>Loading...</p>
    } @else {
      <ul>
        @for (data of todos(); track data.id) {
          <li>{{ data.title }}</li>
        }
      </ul>
    }

    @if (error()) {
      <p>{{ error() }}</p>
    }


  `
})
export class HttpResourceComponent {
  readonly num1 = signal<number | undefined>(undefined);
  readonly result = httpResource<any[]>(
    () => {
      const id = this.num1();
      const baseUrl = 'https://jsonplaceholder.typicode.com/todos';
      return id == null || Number.isNaN(id) ? baseUrl : `${baseUrl}/${id}`;
    },
    { defaultValue: [] }
  );

  readonly todos = computed(() => this.result.value());
  readonly loading = computed(() => this.result.isLoading());
  readonly error = computed(() => this.result.error());
}
