import { IBoardGrid } from "./IBoardGrid";

export interface IBoardItem {
    id: number;
    codigo: string;
    rotulo: string;

    posX: number;
    posY: number;

    GridAtual: IBoardGrid;

    historicoAcoes: Array<[string, boolean]>;

    registrarAcao(acao: [string, boolean]): void;
}