import { EPersonagemProperty } from "../../characters/interfaces/EPersonagemProperty";
import { IDisplayable } from "../../InterfacesBase/IDisplayable";
import { IIdentificavel } from "../../InterfacesBase/IIdentificavel";
import { INomeavel } from "../../InterfacesBase/INomeavel";
import { IGameItem } from "../../items/interfaces/IGameItem";

export interface IHabilidade extends IIdentificavel, INomeavel, IDisplayable {
    tipo: string[];
    level: number;
    alvo?: string;
    alcance?: number;
    propriedade?: EPersonagemProperty;
    max_ativo?: number;
    area_efetiva?: number[];
    requer: string[];
    e_requerido_por: string[];
    requer_tipo_arma?: string[]; // criar E tipo de arma
    requer_item?: IGameItem[];
    efeito: string[];
    duracao_efeito?: number[];
    custo_sp?: number[];
    is_interrompivel?: boolean;
    cast_time?: number[];
    cooldown?: number[];
    cast_delay?: number; // no jogo é o tempo em que o personagem fica parado após o cast
    tempo_ativo?: number[];
}