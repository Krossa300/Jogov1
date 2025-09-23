import { IValorAtributo } from "../../InterfacesBase/IValorAtributo";
import { IBoardItem } from "../../tabuleiro/interfaces";
import { EPersonagemProperty } from "./EPersonagemProperty";
import { EPersonagemRace } from "./EPersonagemRace";
import { EPersonagemSize } from "./EPersonagemSize";
import { IInventario } from "../../items/interfaces/IInventario";

export interface IPersonagem extends IBoardItem {
    nivel: number;
    hp: number;
    race: EPersonagemRace;
    size: EPersonagemSize;
    property: EPersonagemProperty;
    hit: number;
    flee: number;
    speed: number;
    atk_delay: number;
    atributos: IValorAtributo[];
    attack: number;
    defense: number;
    magic_defence: number;
    atk_range: number;
    spell_range: number;
    mode: string[];
    skill_set: number[];//passar skill object
    inventario: IInventario;
}