import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
    {
        path: 'usuarios',
        loadComponent: () => import('./domains/admin/modules/usuarios/usuarios').then(m => m.UsuariosComponent)
    }
];
