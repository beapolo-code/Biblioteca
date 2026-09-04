import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../../services/profile';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId = '1';

  user = {
    name: 'Cesar Tamayo',
    email: 'cesartamayo@itsjbg.edu.ec',
    bio: 'Estudiante de Desarrollo de Software. Apasionado por la lectura y la tecnología.',
    role: 'ADMIN',
    avatarInitial: 'C'
  };

  // Copia de respaldo para la edición
  editUser = { ...this.user };

  // Control de estados de la interfaz
  isEditing = false;
  isSupportOpen = false;

  uploadedBooks: any[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.cargarDatosBackend();
  }

  cargarDatosBackend(): void {
    this.profileService.getProfile(this.userId).subscribe({
      next: (data) => {
        if (data) {
          this.user.name = data.name || this.user.name;
          this.user.bio = data.bio || this.user.bio;
          this.user.avatarInitial = this.user.name.charAt(0).toUpperCase() || 'U';
          this.editUser = { ...this.user };
        }
      },
      error: (err) => console.error('Error al cargar datos del perfil:', err)
    });
  }

  toggleAccountSettings() {
    this.isEditing = !this.isEditing;
    if (this.isEditing) {
      this.editUser = { ...this.user };
      this.isSupportOpen = false;
    }
  }

  saveAccountSettings() {
    this.user = { ...this.editUser };
    this.user.avatarInitial = this.user.name.charAt(0).toUpperCase() || 'U';
    this.isEditing = false;

    this.profileService.updateProfile(this.userId, {
      name: this.user.name,
      bio: this.user.bio
    }).subscribe({
      next: (respuesta) => {
        console.log('Perfil guardado exitosamente en el backend:', respuesta);
      },
      error: (err) => {
        console.error('Error al guardar cambios en el backend:', err);
      }
    });
  }

  toggleSupport() {
    this.isSupportOpen = !this.isSupportOpen;
    if (this.isSupportOpen) {
      this.isEditing = false;
    }
  }
}