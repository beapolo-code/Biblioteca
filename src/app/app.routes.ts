import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin/usuarios',
  },
  {
    path: 'admin',
    loadChildren: () => import('./domains/admin/routes'),
  },
  {
    path: '**',
    redirectTo: 'admin/usuarios',
  },
];