import { IBoardItem } from "../tabuleiro/interfaces";

export interface IGridBasico {
  tipo?: string;           // ex.: 'board', 'agenda', 'inventario'
  altura: number;          // linhas ou unidades verticais
  largura: number;         // colunas ou unidades horizontais
  celula: IBoardItem[][];  // estrutura de células, pode ser detalhada conforme necessário)
}
