import { IAtributoBase } from "../InterfacesBase/IAtributoBase";
import { IValorAtributo } from "../InterfacesBase/IValorAtributo";

const attr1: IAtributoBase = {
    id: "1",
    nome: "Força"
};
const attr2: IAtributoBase = {
    id: "2",
    nome: "Destreza"
};
const attr3: IAtributoBase = {
    id: "3",
    nome: "Vitalidade"
};
const attr4: IAtributoBase = {
    id: "4",
    nome: "Agilidade"
};
const attr5: IAtributoBase = {
    id: "5",
    nome: "Inteligência"
};
const attr6: IAtributoBase = {
    id: "6",
    nome: "Sorte"
};

const valorAttr1: IValorAtributo = {
    valor: 20,
    atributo: attr1
};
const valorAttr2: IValorAtributo = {
    valor: 30,
    atributo: attr2
};
const valorAttr3: IValorAtributo = {
    valor: 40,
    atributo: attr3
};
const valorAttr4: IValorAtributo = {
    valor: 50,
    atributo: attr4
};
const valorAttr5: IValorAtributo = {
    valor: 60,
    atributo: attr5
};
const valorAttr6: IValorAtributo = {
    valor: 10,
    atributo: attr6
};

let atributos: IValorAtributo[] = [
    valorAttr1,
    valorAttr2,
    valorAttr3,
    valorAttr4,
    valorAttr5,
    valorAttr6
];

export { atributos };