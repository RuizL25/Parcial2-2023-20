/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { CursoDetalleComponent } from './curso-detalle.component';
import { Curso } from '../curso';
import faker from '@faker-js/faker';

describe('CursoDetalleComponent', () => {
  let component: CursoDetalleComponent;
  let fixture: ComponentFixture<CursoDetalleComponent>;
  let debug: DebugElement;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CursoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDetalleComponent);
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

    component.cursoDetalle = testCursos[0];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
