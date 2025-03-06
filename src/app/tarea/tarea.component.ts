import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent implements OnInit {

  tareas: any[] = [];
  tarea: any = {};

  constructor(private tareaService: TareasService) { }

  ngOnInit(): void {
    this.obtenerTodasTareas();
  }

  obtenerTodasTareas(): void {
    this.tareaService.obtenerTodas().subscribe((data: any) => {
      this.tareas = data;
    });
  }

  crearTarea(): void {
    this.tareaService.crearTarea(this.tarea).subscribe((data: any) => {
      console.log(data);
      this.obtenerTodasTareas();
      this.tarea = {};
    });
  }
}
