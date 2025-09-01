/*
import { Personagem } from "./Personagem";
import { Raca } from "./Raca";
import { RacaFactory } from "./RacaFactory";
import { PersonagemFactory } from "./PersonagemFactory";

let personagem: Personagem = PersonagemFactory.criarPersonagem();
console.log(personagem);
*/

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