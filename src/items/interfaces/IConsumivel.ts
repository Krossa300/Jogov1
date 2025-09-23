import { IGameItem } from "./IGameItem";
    
export interface IConsumivel extends IGameItem {
    efeito(): void;
}