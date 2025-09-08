import { IBoardGrid } from "./IBoardGrid";

export interface IMovivel {
    posX: number;
    posY: number;

    historicoMovimento: Array<[number, number, IBoardGrid]>;

    registrarMovimento(movimento: [number, number, IBoardGrid]): void;

    moverPara(x: number, y: number, grid: IBoardGrid): void;
}