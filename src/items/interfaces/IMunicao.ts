import { EPersonagemProperty } from "../../characters/interfaces/EPersonagemProperty";
import { IEquip } from "./IEuip";

export interface IMunicao extends IEquip {
    tipo: string; // Exemplo: "bala", "flecha", etc.
    dano: number;
    propriedade?: EPersonagemProperty;
}