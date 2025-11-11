import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, inject, model, resource, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-inputvsSignal',
  standalone: true,
  imports: [FormsModule, CommonModule, TestComponent],
  template: `
  <h4>Input Signal</h4>
  <input type="text" [(ngModel)] = "name">
  <app-test [name]="name()"></app-test>
   
  `
})
export class InputvsSignalComponent {
  readonly name = signal<string>("yağmur")
  
}
