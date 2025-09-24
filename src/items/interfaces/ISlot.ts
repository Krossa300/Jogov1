import { IBoardItemContainer } from "../../tabuleiro/interfaces/IBoardItemContainer";

export interface ISlot extends IBoardItemContainer {
    restricao: string;
}