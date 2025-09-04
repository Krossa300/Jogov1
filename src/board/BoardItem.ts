import { IBoardGrid } from './interfaces/IBoardGrid';
import { IBoardItem } from './interfaces/IBoardItem';

export class BoardItem implements IBoardItem {
    id: number;
    codigo: string;
    rotulo: string;
    posX: number;
    posY: number;
    posGrid: IBoardGrid;
    historicoMovimento: [number, number, IBoardGrid][];
    historicoAcoes: [string, boolean][];

    constructor(
        id: number,
        codigo: string,
        rotulo: string,
        posX: number, 
        posY: number,
        posGrid: IBoardGrid
    ) {
        this.id = id;
        this.codigo = codigo;
        this.rotulo = rotulo;
        this.posX = posX;
        this.posY = posY;
        this.posGrid = posGrid;
        this.historicoMovimento = [];
        this.historicoAcoes = [];
    }

    registrarMovimento(movimento: [number, number, IBoardGrid]): void {
        this.historicoMovimento.push(movimento);
        this.posX = movimento[0];
        this.posY = movimento[1];
        this.posGrid = movimento[2];
    }

    registrarAcao(acao: [string, boolean]): void {
        this.historicoAcoes.push(acao);
    }
}
