import { Component, OnInit } from '@angular/core';
import { TareasService } from '../service/tareas.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent implements OnInit {

  nuevaTarea: string = '';
  titulo: string = 'Mi lista de tareas';
  tareas: any[] = [];

  constructor(private tareaService: TareasService) { }

  ngOnInit(): void {
    this.obtenerTodasTareas();
  }

  obtenerTodasTareas() {
    this.tareaService.obtenerTareas().subscribe(
     (response) => {
      console.log(response)
      this.tareas = response;
     },
     (error) => {
      console.error('Error al cargar tareas:', error);
     }
    );
   }
  
   agregarTarea() {
    if (this.nuevaTarea.trim() !== '') {
     const tarea = { title: this.nuevaTarea, completed: false, userId: 700000 };
     this.tareaService.agregarTarea(tarea).subscribe(
      (response) => {
       this.nuevaTarea = ''; // Limpiar el input
       this.obtenerTodasTareas(); // Refrescar la lista de tareas
      },
      (error) => {
       console.error('Error al agregar tarea:', error);
      }
     );
    }
   }
  }