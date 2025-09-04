import { IBoardGrid } from './interfaces/IBoardGrid';
import { IBoardItem } from './interfaces/IBoardItem';

export class BoardGrid implements IBoardGrid {
    nome: string;
    tipo: string
    altura: number;
    largura: number;
    grid: IBoardItem[][];
    
    obterPorCoordenada(x: number, y: number): IBoardItem | undefined {
        throw new Error('Method not implemented.');
    }
    obterPorCodigo(codigo: string): IBoardItem | undefined {
        throw new Error('Method not implemented.');
    }
    listarItens(): IBoardItem[] {
        throw new Error('Method not implemented.');
    }

    constructor(
        nome: string,
        tipo: string,
        altura: number,
        largura: number
    ) {
        this.nome = nome;
        this.tipo = tipo;
        this.altura = altura;
        this.largura = largura;
        this.grid = Array.from({ length: this.altura }, () => Array(this.largura).fill(null));
    }
}
