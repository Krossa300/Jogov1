import { IBoardGrid } from "../../tabuleiro/interfaces";
import { IGameItem } from "./IGameItem";

export interface IInventario {
    grid: IBoardGrid;
    /*
    itens: IGameItem[];
    */
   receberItem(item: IGameItem): void;
   descartarItem(item: IGameItem): void;
}
