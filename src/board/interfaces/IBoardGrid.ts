import { IBoardItem } from "./IBoardItem";

export interface IBoardGrid {
    nome: string;
    tipo: string;
    altura: number;
    largura: number;

    grid: IBoardItem[][];

    obterPorCoordenada(x: number, y: number): IBoardItem | undefined;

    obterPorCodigo(codigo: string): IBoardItem | undefined;

    listarItens(): IBoardItem[];
}