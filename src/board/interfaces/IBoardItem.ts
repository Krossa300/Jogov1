import { IBoardGrid } from "./IBoardGrid";

export interface IBoardItem {
    id: number;
    codigo: string;
    rotulo: string;

    posX: number;
    posY: number;

    posGrid: IBoardGrid;

    historicoMovimento: Array<[number, number, IBoardGrid]>;

    registrarMovimento(movimento: [number, number, IBoardGrid]): void;

    historicoAcoes: Array<[string, boolean]>;

    registrarAcao(acao: [string, boolean]): void;
}