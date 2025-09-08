import { IBoardGrid } from './interfaces/IBoardGrid';
import { IBoardItem } from './interfaces/IBoardItem';

export class BoardGrid implements IBoardGrid, IBoardItem {
    nome: string;
    tipo: string
    altura: number;
    largura: number;
    grid: IBoardItem[][];

    id: number;
    codigo: string;
    rotulo: string;
    posX: number;
    posY: number;
    posGrid?: IBoardGrid;
    
    obterPorCoordenada(x: number, y: number): IBoardItem | undefined {
        throw new Error('Method not implemented.');
    }
    obterPorCodigo(codigo: string): IBoardItem | undefined {
        throw new Error('Method not implemented.');
    }
    listarItens(): IBoardItem[] {
        throw new Error('Method not implemented.');
    }    
    
    historicoMovimento: [number, number, IBoardGrid][];
    registrarMovimento(movimento: [number, number, IBoardGrid]): void {
        throw new Error('Method not implemented.');
    }
    historicoAcoes: [string, boolean][];
    registrarAcao(acao: [string, boolean]): void {
        throw new Error('Method not implemented.');
    }

    constructor(
        nome: string,
        tipo: string,
        altura: number,
        largura: number,
        id: number,
        codigo: string,
        rotulo: string,
        posX: number,
        posY: number,
        posGrid: IBoardGrid | null,
        historicoMovimento: [number, number, IBoardGrid][],
        historicoAcoes: [string, boolean][]
    ) {
        this.nome = nome;
        this.tipo = tipo;
        this.altura = altura;
        this.largura = largura;
        this.grid = Array.from({ length: this.altura }, () => Array(this.largura).fill(null));
        this.id = id;
        this.codigo = codigo;
        this.rotulo = rotulo;
        this.posX = posX;
        this.posY = posY;
        this.posGrid = posGrid ?? undefined;
        this.historicoMovimento = historicoMovimento;
        this.historicoAcoes = historicoAcoes;
    }
}
