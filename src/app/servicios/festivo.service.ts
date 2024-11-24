import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { FestivoResponse } from '../entidades/festivo-response';

@Injectable({
  providedIn: 'root',
})
export class FestivoService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  verificarFestivo(año: number, mes: number, dia: number): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/verificar/${año}/${mes}/${dia}`);
  }

  obtenerFestivosAnio(anio: number): Observable<FestivoResponse> {
    return this.http.get<FestivoResponse>(`${this.apiUrl}/obtener/${anio}`);
  }
}
