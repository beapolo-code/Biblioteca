import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-libros-categoria',
    imports: [
        MatIconModule,
        MatButtonModule,
    ],
    templateUrl: './libros-categoria.html',
})
export class LibrosCategoria {

    categoria = signal('');

    books = signal([
        {
            title: 'Manual de Marketing Digital',
            author: 'Juan Pérez',
            category: 'Marketing',
        },
        {
            title: 'Fundamentos de Publicidad',
            author: 'María González',
            category: 'Marketing',
        },
        {
            title: 'Marketing Estratégico',
            author: 'Carlos López',
            category: 'Marketing',
        },
        {
            title: 'Análisis y diseño de base de datos',
            author: 'Pedro Sánchez',
            category: 'Desarrollo de Software',
        },
        {
            title: 'Programación Web con Angular',
            author: 'Luis Andrade',
            category: 'Desarrollo de Software',
        },
        {
            title: 'English for Beginners',
            author: 'James Smith',
            category: 'Idiomas',
        },
        {
            title: 'Diseño de Modas',
            author: 'Ana Torres',
            category: 'Diseño de Modas',
        },
    ]);

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.route.paramMap.subscribe(params => {
            this.categoria.set(params.get('categoria') ?? '');
        });
    }

    get filteredBooks() {
        return this.books().filter(
            book => book.category === this.categoria()
        );
    }

    volver() {
        this.router.navigate(['/pages/categorias']);
    }
}