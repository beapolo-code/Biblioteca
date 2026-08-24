import { Component, signal, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Componentes de Angular Material Obligatorios
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  rol: string;
  estado: 'Activo' | 'Inactivo';
}

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule
  ],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
  encapsulation: ViewEncapsulation.None
})
export class UsuariosComponent {
  displayedColumns: string[] = ['id', 'nombre', 'correo', 'rol', 'estado', 'acciones'];

  // Datos dinámicos iniciales (Mocks reactivos)
  usuariosLista = signal<Usuario[]>([
    { id: 1, nombre: 'Alexander García', correo: 'alexander6621@gmail.com', rol: 'Administrador', estado: 'Activo' },
    { id: 2, nombre: 'María López', correo: 'mlopez@dominio.com', rol: 'Estudiante', estado: 'Activo' },
    { id: 3, nombre: 'Carlos Ruiz', correo: 'cruiz@dominio.com', rol: 'Estudiante', estado: 'Inactivo' }
  ]);

  filtroBusqueda = signal<string>('');
  
  nuevoNombre = signal<string>('');
  nuevoCorreo = signal<string>('');
  nuevoRol = signal<string>('Estudiante');
  mostrarFormulario = signal<boolean>(false);
  usuarioEnEdicionId = signal<number | null>(null); // Señal para controlar la edición

  // Getter computado reactivo para filtrar la tabla al escribir
  get usuariosFiltrados() {
    const buscar = this.filtroBusqueda().toLowerCase();
    if (!buscar) return this.usuariosLista();
    
    return this.usuariosLista().filter(u => 
      u.nombre.toLowerCase().includes(buscar) || 
      u.correo.toLowerCase().includes(buscar) ||
      u.rol.toLowerCase().includes(buscar)
    );
  }

  buscarUsuario(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    this.filtroBusqueda.set(valor);
  }

  conmutarFormulario() {
    this.mostrarFormulario.update(valor => !valor);
    if (!this.mostrarFormulario()) {
      // Si cierran el formulario, limpiamos los datos
      this.nuevoNombre.set('');
      this.nuevoCorreo.set('');
      this.nuevoRol.set('Estudiante');
      this.usuarioEnEdicionId.set(null);
    }
  }

  guardarUsuario() {
    if (!this.nuevoNombre() || !this.nuevoCorreo()) return;

    const idEdicion = this.usuarioEnEdicionId();

    if (idEdicion !== null) {
      // SI ESTAMOS EDITANDO: Modifica los campos en memoria reactiva
      this.usuariosLista.update(lista => 
        lista.map(u => u.id === idEdicion ? { 
          ...u, 
          nombre: this.nuevoNombre(), 
          correo: this.nuevoCorreo(), 
          rol: this.nuevoRol() 
        } : u)
      );
    } else {
      // SI ES NUEVO: Agrega al array normalmente
      const nuevoUsuario: Usuario = {
        id: this.usuariosLista().length + 1,
        nombre: this.nuevoNombre(),
        correo: this.nuevoCorreo(),
        rol: this.nuevoRol(),
        estado: 'Activo'
      };
      this.usuariosLista.update(lista => [...lista, nuevoUsuario]);
    }

    // Limpieza total del formulario al finalizar
    this.nuevoNombre.set('');
    this.nuevoCorreo.set('');
    this.nuevoRol.set('Estudiante');
    this.usuarioEnEdicionId.set(null); 
    this.mostrarFormulario.set(false);
  }

  editarUsuario(usuario: Usuario) {
    this.mostrarFormulario.set(true);
    this.nuevoNombre.set(usuario.nombre);
    this.nuevoCorreo.set(usuario.correo);
    this.nuevoRol.set(usuario.rol);
    this.usuarioEnEdicionId.set(usuario.id); // Guardamos el ID para saber quién se edita
  }

  eliminarUsuario(id: number) {
    this.usuariosLista.update(lista => lista.filter(u => u.id !== id));
  }
}
