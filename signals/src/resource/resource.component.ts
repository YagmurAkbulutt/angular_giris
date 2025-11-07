import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, inject, model, resource, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-resource',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <h3>Resource</h3>

    <input type="number" [(ngModel)]="num1" />

    <button (click)="reload()">Yeniden Yükle</button>

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
export class ResourceComponent {
  readonly #http = inject(HttpClient);
  readonly num1 = model(0);

  readonly result = resource({
    loader: async () => {
      const res = await lastValueFrom(
        this.#http.get<any[]>('https://jsonplaceholder.typicode.com/todos/')
      );
      return res;
    },
    defaultValue: []
  });

  readonly todos = computed(() => this.result.value());
  readonly loading = computed(() => this.result.isLoading());
  readonly error = computed(() => (this.result.error() ? 'Hata oluştu' : undefined));

  constructor() {
    // 🔹 num1 değiştiğinde koşula göre resource yeniden yükle
    effect(() => {
      if (this.num1() % 2 === 0) {
        console.log('num1 çift, yeniden yükleniyor...');
        this.result.reload();
      } else {
        console.log('num1 tek, yükleme yapılmadı.');
      }
    });
  }

  reload() {
    this.result.reload();
  }
}
