/*
import { IPartida } from "../partida/interfaces/IPartida";
import { IBoardGrid } from "../tabuleiro/interfaces";
import { IPosicionavel } from "../tabuleiro/interfaces/IPosicionavel";
import { IGameItem } from "../items/interfaces/IGameItem";
import { IInventario } from "../items/interfaces/IInventario";
import { IParticipante } from "../participantes/interfaces/IParticipante";
import { IMestre } from "../participantes/interfaces/IMestre";
import { IJogador } from "../participantes/interfaces/IJogador";

const partidaMock: IPartida = {
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
*/
    //salvarEstado(): void { /* no-op para simulação */ },
    //carregarEstado(): void { /* no-op para simulação */ },
    //criarMundo(): void { /* no-op para simulação */ },
/*
};
*/
