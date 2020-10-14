import {Field} from '../models/field';

export class GameUtils {
  public static getWinner(fields: Field[]): number {
    const matrix: Field[][] = [[], [], []];

    for (const field of fields) {
      matrix[field.x][field.y] = field;
    }

    // Zeilen prüfen
    for (let x = 0; x <= 2; x++) {
      if (matrix[x][0].value !== 0 && matrix[x][0].value === matrix[x][1].value && matrix[x][1].value === matrix[x][2].value) {
        return matrix[x][0].value;
      }
    }

    // Spalten prüfen
    for (let y = 0; y <= 2; y++) {
      if (matrix[0][y].value !== 0 && matrix[0][y].value === matrix[1][y].value && matrix[1][y].value === matrix[1][y].value) {
        return matrix[0][y].value;
      }
    }

    // Diagonal prüfen
    if (matrix[0][0].value !== 0 && matrix[0][0].value === matrix[1][1].value && matrix[1][1].value === matrix[2][2].value) {
      return matrix[0][0].value;
    }

    if (matrix[2][0].value !== 0 && matrix[2][0].value === matrix[1][1].value && matrix[1][1].value === matrix[0][2].value) {
      return matrix[2][0].value;
    }

    return -1;
  }
}

