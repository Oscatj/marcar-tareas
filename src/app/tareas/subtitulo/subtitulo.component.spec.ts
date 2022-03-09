import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TareasService } from '../services/tareas.service';
import { SubtituloComponent } from './subtitulo.component';

describe('SubtituloComponent', () => {
  let component: SubtituloComponent;
  let fixture: ComponentFixture<SubtituloComponent>;
  let service: TareasService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtituloComponent ],
      providers: [TareasService],
    }).compileComponents();

    service = TestBed.inject(TareasService);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 it ('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia renderizar 4 elementos', () => {

    const render: HTMLElement = fixture.nativeElement;

    const tareas = render.querySelector('#tareas')?.textContent?.trim();

    expect (tareas).toEqual('Numero de tareas: 4');
    
  });

  it('deberia disminuir un 1 si se elimina un elemento', () =>{
    service.deleteTareas('Trapear');

    fixture.detectChanges();

    const render: HTMLElement = fixture.nativeElement;
    const tareas = render.querySelector('#tareas')?.textContent?.trim();    

    expect (tareas).toEqual('Numero de tareas: 3');
  })
});
