import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from './curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private baseUrl = 'https://gist.githubusercontent.com/t-montes/67cdf7509174f3556f4ff0082045b8ad/raw/4555fca3360200ab195067e92845c5571d31f624/online-courses.json';

constructor(private http : HttpClient) { }

  getCursos(): Observable<Curso[]> {
      return this.http.get<Curso[]>(`${this.baseUrl}`);
    }

  

  getCurso(id: number): Observable<Curso> {
    return this.http.get<Curso>(`${this.baseUrl}`+ '/' + id);
  }

}
