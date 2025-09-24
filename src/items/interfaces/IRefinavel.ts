import { IGameItem } from "./IGameItem";

export interface IRefinavel {
    refino_atual: number;
    refinmo_maximo: number;

    material_requerido: IGameItem[]; //pode estar no npc ferreiro?
    custo_refino: number[]; // pode estar no npc ferreiro?
}