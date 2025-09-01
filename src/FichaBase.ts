export abstract class FichaBase {
    id: number = 0;
    nome: string = "";
    nivel: number = 1;
    vidaAtual: number = 10;
    vidaMaxima: number = 16;
    defesa: number = 2;
    ataque: number = 3;

    get apto(): boolean { return this.vidaAtual > 0; }
    
    atacar(atacado: FichaBase): void {
        const dano = Math.max(0, this.ataque - atacado.defesa);
        this.darDano(dano, atacado);
    }
    darDano(dano: number, atacado: FichaBase): void {
        atacado.vidaAtual = Math.max(0, atacado.vidaAtual - dano);
    }
    constructor(params:{nome:string}) 
    {this.nome = params.nome;}
}   