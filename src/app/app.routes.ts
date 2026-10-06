import { Routes } from '@angular/router';
import { Inicio } from './components/web/inicio/inicio';
import { Teoria3 } from './components/clase/teoria3/teoria3';
import { Teoria4 } from './components/clase/teoria4/teoria4';
import { Teoria5 } from './components/clase/teoria5/teoria5';
import { CategoriesListComponent } from './components/web/categories-list-component/categories-list-component';
import { CatalogComponent } from './components/web/catalog-component/catalog-component';
import { Teoria7 } from './components/clase/teoria7/teoria7';
import { UserProfileComponent } from './components/web/user-profile-component/user-profile-component';
import { Teoria8 } from './components/clase/teoria8/teoria8';
import { CartSummary } from './components/web/cart-summary/cart-summary';

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
  },  {
    path: 'clase/teoria7',
    component: Teoria7
  },
  {
    path: 'clase/teoria8',
    component: Teoria8
  },
  {
    path: 'web/categories-list',
    component: CategoriesListComponent
  },
  {
    path: 'web/cart-summary',
    component: CartSummary
  },
  {
    path: 'web/catalog',
    component: CatalogComponent
  },
  {
    path: 'web/user-profile',
    component: UserProfileComponent
  },
  {
    path: '**',
    redirectTo: '/inicio',
    pathMatch: 'full',
  }
];
