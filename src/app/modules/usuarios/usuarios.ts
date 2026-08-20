import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-usuarios',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule
    ],
    templateUrl: './usuarios.html',
    styleUrl: './usuarios.css'
})
export class UsuariosComponent {
    displayedColumns: string[] = ['id', 'nombre', 'correo', 'rol', 'estado', 'acciones'];

    dataSource = [
        { id: 1, nombre: 'Alexander García', correo: 'alexander6621@gmail.com', rol: 'Administrador', estado: 'Activo' },
        { id: 2, nombre: 'María López', correo: 'mlopez@dominio.com', rol: 'Estudiante', estado: 'Activo' },
        { id: 3, nombre: 'Carlos Ruiz', correo: 'cruiz@dominio.com', rol: 'Estudiante', estado: 'Inactivo' }
    ];
}