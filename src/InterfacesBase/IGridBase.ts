import { IBoardItemContainer } from "../tabuleiro/interfaces/IBoardItemContainer";

export interface IGridBasico {
  tipo?: string;    // ex.: 'board', 'agenda', 'inventario'
  altura: number;   // linhas ou unidades verticais
  largura: number;  // colunas ou unidades horizontais
  celula: IBoardItemContainer[][];
}
