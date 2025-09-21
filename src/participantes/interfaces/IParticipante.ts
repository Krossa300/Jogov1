import { EMemberRole } from "./EMemberRole";

export interface IParticipante {
    id: string;
    nome: string;
    role: EMemberRole;
}