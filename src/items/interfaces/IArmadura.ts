import { ETipoArmadura } from "./ETipoArmadura";
import { IEquip } from "./IEuip";
import { IRefinavel } from "./IRefinavel";

export interface IArmadura extends IEquip, IRefinavel {
    tipo: ETipoArmadura;
    defesa: number;
}