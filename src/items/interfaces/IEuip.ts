import { IGameItem } from './IGameItem';

export interface IEquip extends IGameItem {
    slot: number; // Exemplo: "arma", "armadura", "pocao", etc.
    isEquipado: boolean;

    aumentarAtributo(atributo: string, valor: number): void;
    equipar(): void;
    desequipar(): void;
}