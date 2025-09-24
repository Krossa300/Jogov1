import { IBoardItem } from ".";
import { IIdentificavel } from "../../InterfacesBase/IIdentificavel";

export interface IBoardItemContainer extends IIdentificavel {
    conteudo: IBoardItem;
}