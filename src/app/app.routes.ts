import { Routes } from '@angular/router';
import { Inicio } from './components/web/inicio/inicio';
import { Teoria3 } from './components/clase/teoria3/teoria3';
import { Teoria4 } from './components/clase/teoria4/teoria4';
import { Teoria5 } from './components/clase/teoria5/teoria5';

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
    path: 'clase/teoria4',
    component: Teoria4
  },
  {
    path: 'clase/teoria5',
    component: Teoria5
  },
  {
    path: '**',
    redirectTo: '/inicio',
    pathMatch: 'full',
  }
];
