import { IPartida } from "../partida/interfaces/IPartida";
import { IParticipante } from "../participantes/interfaces/IParticipante";
import { IMestre } from "../participantes/interfaces/IMestre";
import { IJogador } from "../participantes/interfaces/IJogador";
import React from "react";

export const partidaMock: IPartida = {
    isIniciada: false,
    isAndamento: false,
    isFinalizado: false,
    participantes: [],
    mestre: {} as any,
    jogadores: [],
    fabricaInimigos: {},
    fabricaMundo: {},

    iniciar(): void { this.isIniciada = true; this.isAndamento = true; },

    parar(): void { this.isAndamento = false; this.isFinalizado = true; },

    listarParticipantes(): IParticipante[] { return this.participantes; },

    atribuirMestre(mestre: IMestre): void { this.mestre = mestre; },

    adicionarJogador(jogador: IJogador): void 
    { this.jogadores.push(jogador); this.participantes.push(jogador); },

    removerJogador(jogador: IJogador): void 
    { this.jogadores = this.jogadores.filter(j => j !== jogador); 
    this.participantes = this.participantes.filter(p => p !== jogador); },

    salvarEstado(): void { /* no-op para simulação */ },
    carregarEstado(): void { /* no-op para simulação */ },
    criarMundo() { if (this.isIniciada) { return React.createElement('div', { style: { padding: 8 } }
        , 'Mundo criado! Pronto para jogar.'); } return null; }
};
