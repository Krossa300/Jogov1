import { IBoardItem } from "../../tabuleiro/interfaces/IBoardItem";

export interface IGameItem extends IBoardItem {
    agrupavel: boolean;
    quantidade: number;
}