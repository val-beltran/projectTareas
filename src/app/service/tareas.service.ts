import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  obtenerTareas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  agregarTarea(tarea: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, tarea);
  }
}