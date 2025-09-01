import { FichaBase } from "./FichaBase";

export abstract class FichaBasePersonagem extends FichaBase {
    defesaEquipamento: number = 1;
    ataqueEquipamento: number = 1;

    atacar(atacado: FichaBase): void {
        const dano = Math.max(0, this.ataque + this.ataqueEquipamento - atacado.defesa);
        this.darDano(dano, atacado);
    }
}