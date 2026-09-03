import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'profile',
    standalone: true,
    encapsulation: ViewEncapsulation.None,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule
    ],
    template: `
    <!-- Contenedor interno que se renderiza dentro del Layout de Fuse (Sidebar + Topbar) -->
    <div class="flex flex-col flex-auto min-w-0 bg-default">

        <div class="max-w-5xl mx-auto w-full p-6 md:p-10 space-y-8">

            <!-- CABECERA DE PERFIL -->
            <div class="relative overflow-hidden bg-card rounded-2xl shadow-sm border p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
                <div class="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-primary to-accent"></div>

                <div class="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary-100 text-primary dark:bg-primary-900/40 dark:text-primary-400 font-bold text-3xl flex items-center justify-center flex-shrink-0 shadow-inner border-2 border-background">
                    {{ getInitials(user.name) }}
                </div>

                <div class="flex-1 text-center md:text-left space-y-1">
                    <div class="flex flex-col md:flex-row md:items-center gap-2">
                        <h1 class="text-2xl font-bold text-default">{{ user.name }}</h1>
                        <span class="inline-flex items-center self-center md:self-auto px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-300">
                            {{ user.role }}
                        </span>
                    </div>
                    <p class="text-sm text-secondary">{{ user.email }}</p>
                </div>
            </div>

            <!-- ACCESOS DIRECTOS -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div 
                    (click)="activeModal = 'config'"
                    class="group flex items-center justify-between p-5 bg-card hover:bg-hover rounded-2xl border transition-all duration-200 cursor-pointer shadow-sm">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                            <mat-icon>manage_accounts</mat-icon>
                        </div>
                        <div>
                            <h3 class="text-sm font-semibold text-default">Configuración de cuenta</h3>
                            <p class="text-xs text-secondary">Cambia tu nombre, email o clave</p>
                        </div>
                    </div>
                    <mat-icon class="text-hint group-hover:text-default transition-colors">chevron_right</mat-icon>
                </div>

                <div 
                    (click)="activeModal = 'help'"
                    class="group flex items-center justify-between p-5 bg-card hover:bg-hover rounded-2xl border transition-all duration-200 cursor-pointer shadow-sm">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                            <mat-icon>help_outline</mat-icon>
                        </div>
                        <div>
                            <h3 class="text-sm font-semibold text-default">Ayuda y soporte</h3>
                            <p class="text-xs text-secondary">Contacta al equipo administrador</p>
                        </div>
                    </div>
                    <mat-icon class="text-hint group-hover:text-default transition-colors">chevron_right</mat-icon>
                </div>

            </div>

            <!-- SECCIÓN INFERIOR -->
            <div class="space-y-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <div class="w-1 h-5 bg-primary rounded-full"></div>
                        <h2 class="text-base font-bold text-default">Libros subidos</h2>
                    </div>
                    <span class="text-xs text-secondary">Total: 0</span>
                </div>

                <div class="flex flex-col items-center justify-center p-12 bg-card rounded-2xl border border-dashed text-center">
                    <div class="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 text-hint flex items-center justify-center mb-3">
                        <mat-icon class="icon-size-8">cloud_upload</mat-icon>
                    </div>
                    <p class="text-sm font-medium text-default">Aún no has subido ningún libro</p>
                    <p class="text-xs text-secondary mt-1">Los libros que compartas en la plataforma aparecerán aquí.</p>
                </div>
            </div>

        </div>

        <!-- MODAL CONFIGURACIÓN -->
        <div *ngIf="activeModal === 'config'" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div class="bg-card border rounded-2xl max-w-md w-full p-6 shadow-xl space-y-4">
                
                <div class="flex items-center justify-between border-b pb-3">
                    <h3 class="text-lg font-bold text-default">Editar Cuenta</h3>
                    <button mat-icon-button (click)="activeModal = null">
                        <mat-icon class="text-hint">close</mat-icon>
                    </button>
                </div>

                <form [formGroup]="configForm" (ngSubmit)="saveConfig()" class="space-y-4 pt-2">
                    <mat-form-field class="w-full" appearance="outline">
                        <mat-label>Nombre completo</mat-label>
                        <input matInput formControlName="name">
                    </mat-form-field>

                    <mat-form-field class="w-full" appearance="outline">
                        <mat-label>Correo electrónico</mat-label>
                        <input matInput formControlName="email">
                    </mat-form-field>

                    <div class="flex justify-end gap-3 pt-2">
                        <button mat-button type="button" (click)="activeModal = null">Cancelar</button>
                        <button mat-flat-button color="primary" type="submit" [disabled]="configForm.invalid">
                            Guardar Cambios
                        </button>
                    </div>
                </form>

            </div>
        </div>

    </div>
    `
})
export class ProfileComponent implements OnInit {

    activeModal: 'config' | 'help' | null = null;

    user = {
        name: 'Cesar Tamayo',
        email: 'ctamayo@yavirac.edu.ec',
        role: 'ADMIN'
    };

    configForm!: FormGroup;

    ngOnInit(): void {
        this.configForm = new FormGroup({
            name: new FormControl(this.user.name, [Validators.required]),
            email: new FormControl(this.user.email, [Validators.required, Validators.email])
        });
    }

    getInitials(fullName: string): string {
        if (!fullName) return '';
        const names = fullName.trim().split(' ');
        return names.map(n => n[0]).join('').substring(0, 2).toUpperCase();
    }

    saveConfig(): void {
        if (this.configForm.valid) {
            this.user.name = this.configForm.value.name;
            this.user.email = this.configForm.value.email;
            this.activeModal = null;
        }
    }
}

export default ProfileComponent;