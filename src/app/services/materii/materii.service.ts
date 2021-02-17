import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materie } from 'src/app/components/class-timetable/models/materie';

@Injectable()
export class MateriiService {
  readonly baseUrl = 'https://localhost:44365';
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  getMaterii(): Observable<Materie[]> {
    return this.httpClient.get<Materie[]>(
      this.baseUrl + '/Materii',
      this.httpOptions
    );
  }

  deleteMaterie(id: string) {
    return this.httpClient.delete(
      this.baseUrl + '/Materii/' + id,
      this.httpOptions
    );
  }

  updateMaterie(materie: Materie) {
    return this.httpClient.put(
      this.baseUrl + '/Materii/',
      materie,
      this.httpOptions
    );
  }
}
