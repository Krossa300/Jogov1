import { Personagem } from "./Personagem";
import { Raca } from "./Raca";
import { RacaFactory } from "./RacaFactory";

// Fábrica de Personagem
export class PersonagemFactory {
  static criarPersonagem(): Personagem {
    let r:Raca = RacaFactory.criarRaca();
    return new Personagem({
        nome: "Aragorn",
        classe: "Guerreiro",
        nivel: 5,
        raca: r, // A raça deve ser atribuída posteriormente
        alinhamento: "Leal e Bom",
        forca: 16,
        destreza: 14,
        constituicao: 14,
        inteligencia: 10,
        sabedoria: 12,
        carisma: 14,
        pontosDeVida: 45,
        ca: 16,
        iniciativa: 2,
        deslocamento: "30 pés",
        pericias: "Atletismo, Intimidação",
        equipamentos: "Espada Longa, Escudo, Armadura de Couro",
        historico: "Nobre"
    });
  }
}
