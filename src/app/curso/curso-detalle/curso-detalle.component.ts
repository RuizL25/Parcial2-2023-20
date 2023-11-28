import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-detalle',
  templateUrl: './curso-detalle.component.html',
  styleUrls: ['./curso-detalle.component.css']
})
export class CursoDetalleComponent implements OnInit {

  cursoId !: number;
  @Input() cursoDetalle!: Curso;


  constructor(public curso : CursoService) { }

  getDetail() {
    this.curso.getCurso(this.cursoId).subscribe(curso => this.cursoDetalle = curso);
  }

  ngOnInit() {
  }

}
