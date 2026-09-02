import { IsActiveMatchOptions } from '@angular/router';

export type NavigationItem = {
  id: string;
  label: string;
  description?: string;
  route?: string;
  icon?: string;
  badge?: string;
  children?: NavigationItem[];
  disabled?: boolean;
  expanded?: boolean;
  activeOptions?: { exact: boolean } | IsActiveMatchOptions;
};

export const NAVIGATION: NavigationItem[] = [
  {
    id: 'administracion',
    label: 'Administración',
    description: 'Administración del sistema',
    children: [
      {
        id: 'administracion/usuarios',
        label: 'Gestión de usuarios',
        icon: 'users',
        route: '/admin/usuarios',
        activeOptions: { exact: true },
      },
    ],
  },
];