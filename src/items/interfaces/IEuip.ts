import { IItem } from './IItem';

export interface IEquip extends IItem {
    slot: number; // Exemplo: "arma", "armadura", "pocao", etc.
    
    aumentarAtributo(atributo: string, valor: number): void;
}