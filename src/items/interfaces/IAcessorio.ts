import { IEquip } from "./IEuip";

export interface IAcessorio extends IEquip  {
    tipo: 'anel' | 'colar' | 'brinco' | 'pulseira' | 'outro';
}