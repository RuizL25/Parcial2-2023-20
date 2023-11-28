import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-cursos-listar',
  templateUrl: './cursos-listar.component.html',
  styleUrls: ['./cursos-listar.component.css']
})
export class CursosListarComponent implements OnInit {

  cursos: Array<Curso> = [];
  promedioTemporadas = 0;
  selectedCurso!: Curso;

  constructor(private cursoService: CursoService) { }

  getCursos(){
    this.cursoService.getCursos().subscribe(cursos => {
      this.cursos = cursos;
    });
  }

  onSelectSerie(curso: Curso) {
    this.selectedCurso = curso;
  }
  

  ngOnInit() {
    this.getCursos();
  }

}
