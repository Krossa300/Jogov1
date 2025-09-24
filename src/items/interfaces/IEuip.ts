import { IGameItem } from './IGameItem';

export interface IEquip extends IGameItem {
    slot: string; // Exemplo: "arma", "armadura", "pocao", etc.
    isEquipado: boolean;
    
    script_item?: string; // objeto?
    classes_aplicaveis?: string[]; // Exemplo: ["guerreiro", "mago"]
    slot_carta?: number; // Exemplo: 1, 2, 3, etc.
    level_requerido: number;

    /* Quem realiza a ação de equipar?
    equipar(): void;
    desequipar(): void;
    */
}