import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso.component';
import { CursosListarComponent } from './cursos-listar/cursos-listar.component';
import { CursoDetalleComponent } from './curso-detalle/curso-detalle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CursosListarComponent,CursoDetalleComponent],
  exports: [CursosListarComponent, CursoDetalleComponent]
})
export class CursoModule { }
