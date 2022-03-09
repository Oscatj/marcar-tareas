import { Injectable } from "@angular/core";
import { Tarea } from "../interfaces/tareas";

@Injectable()
export class TareasService{
tareas: Array <Tarea>= [
    {
        tarea: 'Trapear',
        completada: false,
    },
    {
        tarea: 'Barrer',
        completada: false,
    },
    {
        tarea: 'Cocinar',
        completada: false,
    },
    {
        tarea: 'Fregar',
        completada: false,
    }

];

deleteTareas(nombreTarea: string){
    this.tareas = this.tareas.filter(tarea=>tarea.tarea!== nombreTarea)
}
completeTarea (nombreTarea: string){
    const tarea: Tarea = this.tareas.find(tarea=>
        {
            return tarea.tarea===nombreTarea
        })!;

        tarea.completada = !tarea.completada;
}
}