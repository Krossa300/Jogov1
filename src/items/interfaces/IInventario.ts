import { IBoardGrid } from "../../tabuleiro/interfaces";
import { IGameItem } from "./IGameItem";

export interface IInventario {
    grid: IBoardGrid;
    /*
    itens: IGameItem[];
    adicionarItem(item: IGameItem): void;
    removerItem(item: IGameItem): void;
    */
   receberItem(item: IGameItem): void;
   descartarItem(item: IGameItem): void;
}
