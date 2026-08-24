import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-my-component',
    imports: [
        MatIconModule,
        MatButtonModule,
    ],
    templateUrl: './my-component.html',
})
export class MyComponent {

    categories = signal([
        'Investigación Yavirac',
        'Diseño de Modas',
        'Libros Físicos',
        'Idiomas',
        'Desarrollo de Software',
        'Repositorio de los trabajos de titulación',
        'Marketing',
        'Arte Culinario',
        'Guía Nacional de Turismo'
    ]);

    constructor(private router: Router) {}

    goToCategory(category: string) {
        this.router.navigate([
            '/pages/categorias',
            category
        ]);
    }
}