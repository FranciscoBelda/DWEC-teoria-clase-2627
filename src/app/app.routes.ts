import { Routes } from '@angular/router';
import { Inicio } from './components/web/inicio/inicio';
import { Teoria3 } from './components/clase/teoria3/teoria3';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: Inicio
  },
  {
    path: 'clase/teoria3',
    component: Teoria3
  },
  {
    path: '**',
    redirectTo: '/inicio',
    pathMatch: 'full',
  }
];
