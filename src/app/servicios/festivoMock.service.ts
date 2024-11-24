import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FestivoResponse } from '../entidades/festivo-response';

@Injectable({
  providedIn: 'root',
})
export class FestivosMockService {
  verificarFestivo(año: number, mes: number, dia: number): Observable<string> {
    return of('No es festivo');
  }

  obtenerFestivosAnio(anio: number): Observable<FestivoResponse> {
    return of({
      data: [
        { fecha: '2024-01-01', descripcion: 'Año Nuevo' },
        { fecha: '2024-12-25', descripcion: 'Navidad' },
      ],
      total: 2,
    });
  }
}
