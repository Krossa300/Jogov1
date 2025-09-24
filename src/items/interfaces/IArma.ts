import { EPersonagemProperty } from "../../characters/interfaces/EPersonagemProperty";
import { ETipoArma } from "./ETipoArma";
import { IEquip } from "./IEuip";
import { IRefinavel } from "./IRefinavel";

export interface IArma extends IEquip, IRefinavel {
    tipo: ETipoArma;
    propriedade?: EPersonagemProperty;
    ataque: number;
}