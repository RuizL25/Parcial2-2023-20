/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';


import { HttpClientModule } from '@angular/common/http';
import { CursosListarComponent } from './cursos-listar.component';
import { Curso } from '../curso';

describe('CursosListarComponent', () => {
  let component: CursosListarComponent;
  let fixture: ComponentFixture<CursosListarComponent>;
  let debug: DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CursosListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosListarComponent);
    component = fixture.componentInstance;

    let testCursos : Array<Curso> = []

    for (let i = 0; i<6; i++){
      testCursos[i] = new Curso(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.boolean(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.number())
    }

    component.cursos = testCursos;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
