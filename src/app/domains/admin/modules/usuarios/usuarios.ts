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

// INTERFAZ OFICIAL CON LOS CAMPOS EXACTOS DE POSTGRES
interface Usuario {
  id: string;          
  name: string;        
  email: string;       
  role: string;        
  is_active: boolean;  
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
  // Columnas oficiales que se van a mapear en el HTML
  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'is_active', 'acciones'];

  // DATOS DINÁMICOS ADAPTADOS A LOS CAMPOS REALES DE POSTGRES
  usuariosLista = signal<Usuario[]>([
    { id: '1', name: 'Alexander García', email: 'alexander6621@gmail.com', role: 'Administrador', is_active: true },
    { id: '2', name: 'María López', email: 'mlopez@dominio.com', role: 'Estudiante', is_active: true },
    { id: '3', name: 'Carlos Ruiz', email: 'cruiz@dominio.com', role: 'Estudiante', is_active: false }
  ]);

  filtroBusqueda = signal<string>('');
  
  // Variables reactivas enlazadas a los formularios
  nuevoName = signal<string>('');
  nuevoEmail = signal<string>('');
  nuevoRole = signal<string>('Estudiante');
  mostrarFormulario = signal<boolean>(false);
  usuarioEnEdicionId = signal<string | null>(null);

  // Getter reactivo para el filtrado en tiempo real
  get usuariosFiltrados() {
    const buscar = this.filtroBusqueda().toLowerCase();
    if (!buscar) return this.usuariosLista();
    
    return this.usuariosLista().filter(u => 
      u.name.toLowerCase().includes(buscar) || 
      u.email.toLowerCase().includes(buscar) ||
      u.role.toLowerCase().includes(buscar)
    );
  }

  buscarUsuario(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    this.filtroBusqueda.set(valor);
  }

  conmutarFormulario() {
    this.mostrarFormulario.update(valor => !valor);
    if (!this.mostrarFormulario()) {
      this.limpiarFormulario();
    }
  }

  guardarUsuario() {
    if (!this.nuevoName() || !this.nuevoEmail()) return;

    const idEdicion = this.usuarioEnEdicionId();

    if (idEdicion !== null) {
      // SI ESTAMOS EDITANDO: Modifica los campos en memoria reactiva
      this.usuariosLista.update(lista => 
        lista.map(u => u.id === idEdicion ? { 
          ...u, 
          name: this.nuevoName(), 
          email: this.nuevoEmail(), 
          role: this.nuevoRole() 
        } : u)
      );
    } else {
      // SI ES NUEVO: Agrega al array con las propiedades oficiales
      const nuevoUsuario: Usuario = {
        id: (this.usuariosLista().length + 1).toString(),
        name: this.nuevoName(),
        email: this.nuevoEmail(),
        role: this.nuevoRole(),
        is_active: true
      };
      this.usuariosLista.update(lista => [...lista, nuevoUsuario]);
    }

    this.limpiarFormulario();
  }

  editarUsuario(usuario: Usuario) {
    this.mostrarFormulario.set(true);
    this.nuevoName.set(usuario.name);
    this.nuevoEmail.set(usuario.email);
    this.nuevoRole.set(usuario.role);
    this.usuarioEnEdicionId.set(usuario.id); // Guardamos el ID para saber quién se edita
  }

  eliminarUsuario(id: string) {
    this.usuariosLista.update(lista => lista.filter(u => u.id !== id));
  }

  limpiarFormulario() {
    this.nuevoName.set('');
    this.nuevoEmail.set('');
    this.nuevoRole.set('Estudiante');
    this.usuarioEnEdicionId.set(null); 
    this.mostrarFormulario.set(false);
  }
}
