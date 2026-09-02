import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DetalleLibroService } from './detalle-libro.service';

@Component({
  selector: 'app-detalle-libro',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalle-libro.html',
})
export class DetalleLibro {
  

  private route = inject(ActivatedRoute);
  private librosService = inject(DetalleLibroService);
  
  libro: any = null;
  favorito = false;
  
  cambiarFavorito() {
  this.favorito = !this.favorito;
  }

  constructor() {
  const id = this.route.snapshot.paramMap.get('id');

  if (id) {
    this.librosService.obtenerLibro(id).subscribe({
      next: (respuesta) => {
        console.log('Libro recibido:', respuesta);
        this.libro = respuesta;
      },
      error: (error) => {
        console.error('Error al obtener el libro:', error);
      },
    });
  }
}
}