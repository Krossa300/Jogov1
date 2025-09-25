import { ReactNode } from "react";
import { IJogador } from "../../participantes/interfaces/IJogador";
import { IMestre } from "../../participantes/interfaces/IMestre";
import { IParticipante } from "../../participantes/interfaces/IParticipante";

export interface IPartida {
    
    isIniciada: boolean;
    isAndamento: boolean;
    isFinalizado: boolean;
    participantes: IParticipante[];
    mestre: IMestre;
    jogadores: IJogador[];
    fabricaInimigos: any; // Defina o tipo correto conforme sua implementação
    fabricaMundo: any; // Defina o tipo correto conforme sua implementação    

    iniciar(): void;
    parar(): void;
    listarParticipantes(): IParticipante[];
    atribuirMestre(mestre: IMestre): void;
    adicionarJogador(jogador: IJogador): void;
    removerJogador(jogador: IJogador): void;   
    salvarEstado(): void;
    carregarEstado(): void;
    criarMundo(): ReactNode | null;
}