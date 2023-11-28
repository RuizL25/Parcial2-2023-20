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
  certificados : string = "Los cursos";

  constructor(private cursoService: CursoService) { }

  getCursos(){
    this.cursoService.getCursos().subscribe(cursos => {
      this.cursos = cursos;
      this.getCursosCertificado()
    });
  }

  getCursosCertificado(){
    for (let index = 0; index < this.cursos.length; index++) {
      if (this.cursos[index].offers_certificate == true) {
        this.certificados += " " + this.cursos[index].id + ",";
      }
    };
    this.certificados = this.certificados.slice(0, -1);
    this.certificados += " ofrecen certificado";
  }

  onSelectSerie(curso: Curso) {
    this.selectedCurso = curso;
  }
  

  ngOnInit() {
    this.getCursos();
  }

}
