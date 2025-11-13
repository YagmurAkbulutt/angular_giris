import { httpResource } from '@angular/common/http';
import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FlexiGridModule} from "flexi-grid"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FlexiGridModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly result = httpResource<any[]>(() => {
    return "https://jsonplaceholder.typicode.com/todos"
  });

  readonly todos = computed(() => this.result.value() ?? []);
  readonly loading = computed(() => this.result.isLoading())
}
