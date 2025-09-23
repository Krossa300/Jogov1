/*
Instanciar um personagem
Instanciar um inventario e os itens
Adicionar itens ao inventario
Exibir inventario
*/

import { IGameItem } from "../items/interfaces/IGameItem";
import { IInventario } from "../items/interfaces/IInventario";
import { IBoardGrid } from "../tabuleiro/interfaces";

const inventario: IInventario = {
    grid: {
        altura: 5,
        largura: 5,
        // Matriz 5x5 (mock). Cast para simplificar o exemplo sem implementar itens reais nas células
        celula: Array.from({ length: 5 }, () => Array(5).fill(null as unknown as IGameItem)) as unknown as any
    },
    receberItem(item: IGameItem): void {
        for (let y = 0; y < this.grid.altura; y++) {
            for (let x = 0; x < this.grid.largura; x++) {
                if (!this.grid.celula[y][x]) {
                    this.grid.celula[y][x] = item;
                    item.posicionar(this.grid, x, y);
                    return;
                }
            }
        }
        console.log("Inventário cheio. Não foi possível adicionar o item.");
    },
    descartarItem(item: IGameItem): void {      
        console.log(`Item ${item.nome} removido do inventário.`);
    }
};

class GameItem implements IGameItem {
    id: string;
    nome: string;
    descricao?: string | undefined;
    agrupavel: boolean;
    quantidade: number;
    grid: IBoardGrid;
    posicaoX: number;
    posicaoY: number;

    constructor(params: {
        id: string;
        nome: string;
        descricao?: string;
        agrupavel: boolean;
        quantidade: number;
        grid: IBoardGrid;
        posicaoX: number;
        posicaoY: number;
    }) {
        this.id = params.id;
        this.nome = params.nome;
        this.descricao = params.descricao;
        this.agrupavel = params.agrupavel;
        this.quantidade = params.quantidade;
        this.grid = params.grid;
        this.posicaoX = params.posicaoX;
        this.posicaoY = params.posicaoY;
    }

    show(): void { /* no-op para simulação */ }
    hide(): void { /* no-op para simulação */ }

    posicionar(grid: IBoardGrid, x: number, y: number): void {
        this.grid = grid;
        this.posicaoX = x;
        this.posicaoY = y;
    }

    // Assinaturas de sobrecarga compatíveis com IPosicionavel
    mover(grid: IBoardGrid, x: number, y: number): void;
    mover(gridI: IBoardGrid, gridF: IBoardGrid, xI: number, yI: number, xF: number, yF: number): void;
    mover(...args: any[]): void {
        if (args.length === 3) {
            const [grid, x, y] = args as [IBoardGrid, number, number];
            this.posicionar(grid, x, y);
        } else if (args.length === 6) {
            const [_gridI, gridF, _xI, _yI, xF, yF] = args as [IBoardGrid, IBoardGrid, number, number, number, number];
            this.posicionar(gridF, xF, yF);
        }
    }
}

const item1: IGameItem = new GameItem({
    id: "item1",
    nome: "Espada Curta",
    descricao: "Uma espada curta e afiada.",
    agrupavel: false,
    quantidade: 1,
    grid: inventario.grid,
    posicaoX: 0,
    posicaoY: 0,
});

const item2: IGameItem = new GameItem({
    id: "item2",
    nome: "Poção de Vida",
    descricao: "Restaura uma pequena quantidade de vida.",
    agrupavel: true,
    quantidade: 3,
    grid: inventario.grid,
    posicaoX: 1,
    posicaoY: 0,
});

const item3: IGameItem = new GameItem({
    id: "item3",
    nome: "Arco Simples",
    descricao: "Um arco básico de madeira.",
    agrupavel: false,
    quantidade: 1,
    grid: inventario.grid,
    posicaoX: 2,
    posicaoY: 0,
});

inventario.receberItem(item1);
inventario.receberItem(item2);
inventario.receberItem(item3);

export {inventario};