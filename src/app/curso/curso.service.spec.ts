/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CursoService } from './curso.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('Service: Curso', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CursoService]
    });
  });

  it('should ...', inject([CursoService], (service: CursoService) => {
    expect(service).toBeTruthy();
  }));
});
