import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FestivoResponse } from 'src/app/entidades/festivo-response';
import { FestivoService } from 'src/app/servicios/festivo.service';
import { FestivosMockService } from 'src/app/servicios/festivoMock.service';

@Component({
  selector: 'app-festivo',
  templateUrl: './festivo.component.html',
  styleUrls: ['./festivo.component.css']
})
export class FestivoComponent implements OnInit {
  fechaSeleccionada: Date = new Date();
  anioSeleccionado: number = new Date().getFullYear();
  resultadoVerificacion: string = '';
  festivosResponse: FestivoResponse | null = null;

  columns = [
    { 
      prop: 'fecha', 
      name: 'Fecha',
      pipe: {
        transform: (value: string) => {
          return new Date(value).toLocaleDateString('es-CO');
        }
      }
    },
    { prop: 'descripcion', name: 'Descripción' }
  ];

  constructor(private festivosService: FestivoService, private festivoMock: FestivosMockService) {}
  ngOnInit(): void {
  }

  verificarFestivo(): void {
    const año = this.fechaSeleccionada.getFullYear();
    const mes = this.fechaSeleccionada.getMonth() + 1;
    const dia = this.fechaSeleccionada.getDate();

    this.festivosService.verificarFestivo(año, mes, dia).subscribe(
      (respuesta) => {
        if (respuesta === 'Es un festivo') {
          this.resultadoVerificacion = `La fecha seleccionada (${this.fechaSeleccionada.toLocaleDateString('es-CO')}) **es un festivo.**`;
        } else {
          this.resultadoVerificacion = `La fecha seleccionada (${this.fechaSeleccionada.toLocaleDateString('es-CO')}) **no es un festivo.**`;
        }
      },
      (error) => {
        console.error('Error al verificar festivo:', error);
        this.resultadoVerificacion = 'Hubo un error al verificar la fecha. Intente nuevamente.';
      }
    );
  }

  obtenerFestivos(): void {
    this.festivosService.obtenerFestivosAnio(this.anioSeleccionado).subscribe(
      (respuesta) => {
        this.festivosResponse = respuesta;
      },
      (error) => {
        console.error('Error al obtener festivos:', error);
        this.festivosResponse = null;
      }
    );
  }

}
