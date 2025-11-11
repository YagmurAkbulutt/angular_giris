import { Routes } from '@angular/router';
import { ComputedComponent } from '../computed/computed.component';
import { linkedSignal } from '@angular/core';
import { LinkedSignalComponent } from '../linkedSignal/linkedSignal.component';
import { EffectComponent } from '../effect/effect.component';
import { ResourceComponent } from '../resource/resource.component';
import { HttpResourceComponent } from '../httpResource/httpResource.component';
import { InputvsSignalComponent } from '../inputvsSignal/inputvsSignal.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'resource'
  },
  {
    path: 'computed',
    component: ComputedComponent
  },
  {
    path: 'linkedSignal',
    component: LinkedSignalComponent
  },
  {
    path: 'effect',
    component: EffectComponent
  },
  {
    path: 'resource',
    component: ResourceComponent
  },
  {
    path: "httpResource",
    component: HttpResourceComponent
  },
  {
    path: "inputvsSignal",
    component: InputvsSignalComponent
  }
];
