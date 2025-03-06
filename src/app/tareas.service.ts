import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private apiUrl = '';

  constructor(private http: HttpClient) { }

  obtenerTodas(): any {
    return this.http.get(`${this.apiUrl}`);
  }

  crearTarea(data: any): any {
    return this.http.post(`${this.apiUrl}`, data);
  }
}
