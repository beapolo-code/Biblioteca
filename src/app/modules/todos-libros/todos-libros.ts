import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TodosLibrosService } from './todos-libros.service';

@Component({
  selector: 'app-todos-libros',
  imports: [RouterLink],
  templateUrl: './todos-libros.html',
})
export class TodosLibros implements OnInit {
  private librosService = inject(TodosLibrosService);

  libros: any[] = [];

  ngOnInit(): void {
    this.librosService.obtenerLibros().subscribe({
      next: (respuesta) => {
        console.log('Libros recibidos:', respuesta);
        this.libros = respuesta.data;
      },
      error: (error) => {
        console.error('Error al obtener los libros:', error);
      },
    });
  }
}