import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environnement/environnement';
import { Observable } from 'rxjs';
import { Etablissement } from '../../Model/etablissement/etablissement';

@Injectable({
  providedIn: 'root',
})
export class EtablissementService {
  private baseUrl = environment.baseUrl + '/etablissement';

  constructor(private http: HttpClient) {}

  getEtablissement(): Observable<Etablissement[]> {
    return this.http.get<Etablissement[]>(`${this.baseUrl}/all`);
  }

  getEtablissementById(id: string): Observable<Etablissement> {
    return this.http.get<Etablissement>(`${this.baseUrl}/${id}`);
  }

  createdEtablissement(
    etablissement: Etablissement
  ): Observable<Etablissement> {
    return this.http.post<Etablissement>(`${this.baseUrl}/add`, etablissement);
  }
}
