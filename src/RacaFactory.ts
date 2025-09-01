import { Raca } from "./Raca";

// Fábrica de Raça
export class RacaFactory {
  static criarRaca(): Raca {
    
    return new Raca({
        nome: "Humano",
        descricao: "Humanos são versáteis e adaptáveis, conhecidos por sua ambição e diversidade.",
        modificadoresAtributos: { forca: 1, destreza: 1, constituicao: 1, inteligencia: 1, sabedoria: 1, carisma: 1 },
        tamanho: "Médio",
        velocidade: "30 pés",
        idiomas: ["Comum", "Escolha um idioma adicional"],
        habilidadesRaciais: ["Versatilidade", "Determinação Humana"]
    });
  }
}