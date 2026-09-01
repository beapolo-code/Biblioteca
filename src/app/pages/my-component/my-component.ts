import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-my-component',
    imports: [
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
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

    showForm = signal(false);

    newCategoryName = signal('');
    newCategoryDescription = signal('');

    constructor(private router: Router) {}

    openForm() {
        this.showForm.set(true);
    }

    cancelForm() {
        this.showForm.set(false);
        this.newCategoryName.set('');
        this.newCategoryDescription.set('');
    }

    addCategory() {
        const name = this.newCategoryName().trim();

        if (!name) {
            return;
        }

        this.categories.update(categories => [
            ...categories,
            name
        ]);

        this.cancelForm();
    }

    goToCategory(category: string) {
        this.router.navigate([
            '/pages/categorias',
            category
        ]);
    }
}