import { IBoardGrid } from "../tabuleiro/interfaces/IBoardGrid";

export interface IPosicionavel  {
    grid: IBoardGrid
    posicaoX: number; // pode ser opcional pois posibilita
    posicaoY: number; // criar um item no vazio e posicionalo depois

    posicionar(grid: IBoardGrid, x: number, y: number): void;
    mover(grid: IBoardGrid, x: number, y: number):void;
    mover(gridI: IBoardGrid, gridF: IBoardGrid,
         xI: number, yI: number, xF: number, yF: number):void;
}