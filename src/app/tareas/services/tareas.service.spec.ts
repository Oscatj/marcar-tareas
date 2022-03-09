import { TareasService } from "./tareas.service"

describe ('TareaService',() => {
 let service: TareasService
 
 beforeEach(()=>{
    service = new TareasService()
 });
 it ("ToBe: deberia verificar que se carguen 4 tareas", ()=> {
    expect(service.tareas.length).toBe(4);
});
 it ("Delete: deberia eliminar la tarea barrer", () =>{
     service.deleteTareas('Barrer');

     expect(service.tareas.length).toBe(3);
 });
 it("No Delete: deberia no borrar una tarea que no existe", () =>{
    service.deleteTareas('abcd');

    expect(service.tareas.length).toBe(4)
 });
 it("Spy: deberia llamar la funcion completar una sola vez", () => {

    const espia = jasmine.createSpyObj('TareasService', ['completeTarea']);

    espia.completeTarea();

    expect(espia.completeTarea.calls.count()).toBe(1);
 })
 });