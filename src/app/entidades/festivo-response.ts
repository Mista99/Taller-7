import { Festivo } from './festivo';

export class FestivoResponse {
  constructor(
    public data: Festivo[],
    public total: number
  ) {}
}
