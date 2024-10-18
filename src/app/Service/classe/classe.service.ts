import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environnement/environnement';
import { Observable } from 'rxjs';
import { Classe } from '../../Model/classes/classe';

@Injectable({
  providedIn: 'root',
})
export class ClasseService {
  private baseUrl = environment.baseUrl + '/classe';

  constructor(private http: HttpClient) {}

  getClasse(): Observable<Classe[]> {
    return this.http.get<Classe[]>(`${this.baseUrl}/all`);
  }
}
