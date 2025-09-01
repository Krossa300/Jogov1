import { BaseItem } from './BaseItem';

export abstract class BaseItemEquipavel extends BaseItem {
    // Adicione propriedades e métodos comuns para itens equipáveis aqui
    equipado: boolean = false;
    

    equipar() {
        this.equipado = true;
    }
    desequipar() {
        this.equipado = false;
    }
}