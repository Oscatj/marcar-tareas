import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtituloComponent } from './subtitulo/subtitulo.component';
import { ListadoTareasComponent } from './listado-tareas/listado-tareas.component';
import { GripComponent } from './grip/grip.component';
import { TareasService } from './services/tareas.service';



@NgModule({
  declarations: [
    SubtituloComponent,
    ListadoTareasComponent,
    GripComponent
  ],
  imports: [
    CommonModule
  ],  
  exports: [
    GripComponent
  ], 
  providers: [
    TareasService
  ]
})
export class TareasModule { }
