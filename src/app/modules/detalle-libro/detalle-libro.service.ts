import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetalleLibroService {
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/api/v1/books';

  obtenerLibro(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}