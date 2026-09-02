import { Routes } from '@angular/router';
import { AdminLayout } from './layout/layout';

const routes: Routes = [
  {
    path: '',
    component: AdminLayout,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'usuarios',
      },
      {
        path: 'usuarios',
        loadComponent: () =>
          import('./modules/usuarios/usuarios').then(
            (m) => m.UsuariosComponent
          ),
      },
      {
        path: '**',
        redirectTo: 'usuarios',
      },
    ],
  },
];

export default routes;