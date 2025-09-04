import { IAtivavel } from "./IAtivavel";
import { IBoardGrid } from "./IBoardGrid";
// import { IBoardItem } from "./IBoardItem";

export interface IBoard extends IAtivavel {
    Id: number;
    Codigo: string;
    Nome: string;

    Grids: IBoardGrid[];
    // BoardItems?: IBoardItem[];
    // Personagens?: IBoardItem[];
    // Situacoes?: IBoardItem[];
    Carregar(): boolean;

    Salvar(): boolean;

    MoverIBoardItem(
        gridOrigem: IBoardGrid,
        coordenadasOrigem: number[],
        gridDestino: IBoardGrid,
        coordenadasDestino: number[]
    ): boolean;

    ListarGrids(): IBoardGrid[];
    ListarGrids(filtro: string): IBoardGrid[];
}