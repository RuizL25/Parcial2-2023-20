import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso.component';
import { CursosListarComponent } from './cursos-listar/cursos-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CursosListarComponent],
  exports: [CursosListarComponent]
})
export class CursoModule { }
