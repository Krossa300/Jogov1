import { Raca } from "./Raca";

export class Personagem {
  nome: string;
  classe: string;
  nivel: number;
  raca: Raca;
  alinhamento: string;

  forca: number;
  destreza: number;
  constituicao: number;
  inteligencia: number;
  sabedoria: number;
  carisma: number;

  pontosDeVida: number;
  ca: number; // Classe de Armadura
  iniciativa: number;
  deslocamento: string;

  pericias: string;
  equipamentos: string;
  historico: string;

  constructor(params: {
    nome: string;
    classe: string;
    nivel: number;
    raca: Raca;
    alinhamento: string;
    forca: number;
    destreza: number;
    constituicao: number;
    inteligencia: number;
    sabedoria: number;
    carisma: number;
    pontosDeVida: number;
    ca: number;
    iniciativa: number;
    deslocamento: string;
    pericias: string;
    equipamentos: string;
    historico: string;
  }) {
    this.nome = params.nome;
    this.classe = params.classe;
    this.nivel = params.nivel;
    this.raca = params.raca;
    this.alinhamento = params.alinhamento;
    this.forca = params.forca;
    this.destreza = params.destreza;
    this.constituicao = params.constituicao;
    this.inteligencia = params.inteligencia;
    this.sabedoria = params.sabedoria;
    this.carisma = params.carisma;
    this.pontosDeVida = params.pontosDeVida;
    this.ca = params.ca;
    this.iniciativa = params.iniciativa;
    this.deslocamento = params.deslocamento;
    this.pericias = params.pericias;
    this.equipamentos = params.equipamentos;
    this.historico = params.historico;
  }
}