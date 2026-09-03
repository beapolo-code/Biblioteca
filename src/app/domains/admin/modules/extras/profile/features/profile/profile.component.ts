import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = {
    name: 'Cesar Tamayo',
    email: 'cesartamayo@itsjbg.edu.ec',
    role: 'ADMIN',
    avatarInitial: 'C'
  };

  // Copia de respaldo para la edición
  editUser = { ...this.user };

  // Control de estados de la interfaz
  isEditing = false;
  isSupportOpen = false;

  uploadedBooks: any[] = [];

  // Alternar formulario de configuración
  toggleAccountSettings() {
    this.isEditing = !this.isEditing;
    if (this.isEditing) {
      this.editUser = { ...this.user };
      this.isSupportOpen = false; // Cierra soporte si está abierto
    }
  }

  // Guardar cambios de cuenta
  saveAccountSettings() {
    this.user = { ...this.editUser };
    this.user.avatarInitial = this.user.name.charAt(0).toUpperCase() || 'U';
    this.isEditing = false;
  }

  // Alternar panel de soporte
  toggleSupport() {
    this.isSupportOpen = !this.isSupportOpen;
    if (this.isSupportOpen) {
      this.isEditing = false; // Cierra configuración si está abierta
    }
  }
}