import { IItem } from "./IItem";

export interface IConsumivel extends IItem {
    
    efeito(): void;
}