/*
import { Personagem } from "./Personagem";
import { Raca } from "./Raca";
import { RacaFactory } from "./RacaFactory";
import { PersonagemFactory } from "./PersonagemFactory";

let personagem: Personagem = PersonagemFactory.criarPersonagem();
console.log(personagem);
*/
/*
import { FichaHeroi } from "./FichaHeroi";
import { FichaMonstroComum } from "./FichaMonstroComum";

let monstro: FichaMonstroComum = new FichaMonstroComum({ nome: "goblin" });
let heroi: FichaHeroi = new FichaHeroi({ nome: "slayer" });
for (let i = 0; i < 10; i++) {
    if (!heroi.apto) break;
    heroi.atacar(monstro);
    if (!monstro.apto) break;
    monstro.atacar(heroi);
}
console.log(heroi);
console.log(monstro);
*/
import { BoardGrid } from "./board/BoardGrid";
import { BoardItem } from "./board/BoardItem";

let grid: BoardGrid = new BoardGrid("Grid 1", "Batalha", 10, 10);
let item1: BoardItem = new BoardItem(1, "1", "Item 1", 0, 0, grid);
let item2: BoardItem = new BoardItem(2, "2", "Item 2", 1, 1, grid);
grid.grid[item1.posY][item1.posX] = item1;
grid.grid[item2.posY][item2.posX] = item2;

function fireboll(posX:number, poxY:number): void {
    let area = [
        [posX-1, poxY-1], [posX, poxY-1], [posX+1, poxY-1],
        [posX-1, poxY],   [posX, poxY],   [posX+1, poxY],
        [posX-1, poxY+1], [posX, poxY+1], [posX+1, poxY+1],
    ];
    for (let coord of area) {
        let item:BoardItem = new BoardItem(0, "F", "Fire", coord[0], coord[1], grid);
        grid.grid[item.posY][item.posX] = item;
    }
}

fireboll(5, 5);

for (let y = 0; y < grid.altura; y++) {
    let row = "";
    for (let x = 0; x < grid.largura; x++) {
        if (grid.grid[y][x]) {
            row += `[${grid.grid[y][x].codigo}]`;
        } else {
            row += "[ ]";
        }
    }
    console.log(row);
}