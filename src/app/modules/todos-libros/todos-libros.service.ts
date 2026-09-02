import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Libro {
  id: string;
  title: string;
  author: string;
  categoryId: string;
  fileUrl: string;
}

interface RespuestaLibros {
  data: Libro[];
  version: string;
}

@Injectable({
  providedIn: 'root',
})
export class TodosLibrosService {
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/api/v1/books';

  obtenerLibros(): Observable<RespuestaLibros> {
    return this.http.get<RespuestaLibros>(this.apiUrl);
  }
}