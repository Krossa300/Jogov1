export class Raca {
  nome: string;
  descricao: string;
  modificadoresAtributos: {
    forca?: number;
    destreza?: number;
    constituicao?: number;
    inteligencia?: number;
    sabedoria?: number;
    carisma?: number;
  };
  tamanho: string;
  velocidade: string;
  idiomas: string[];
  habilidadesRaciais: string[];

  constructor(params: {
    nome: string;
    descricao: string;
    modificadoresAtributos?: {
      forca?: number;
      destreza?: number;
      constituicao?: number;
      inteligencia?: number;
      sabedoria?: number;
      carisma?: number;
    };
    tamanho: string;
    velocidade: string;
    idiomas: string[];
    habilidadesRaciais: string[];
  }) {
    this.nome = params.nome;
    this.descricao = params.descricao;
    this.modificadoresAtributos = params.modificadoresAtributos || {};
    this.tamanho = params.tamanho;
    this.velocidade = params.velocidade;
    this.idiomas = params.idiomas;
    this.habilidadesRaciais = params.habilidadesRaciais;
  }
}