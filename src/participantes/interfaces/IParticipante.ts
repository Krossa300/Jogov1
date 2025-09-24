import { IIdentificavel } from "../../InterfacesBase/IIdentificavel";
import { INomeavel } from "../../InterfacesBase/INomeavel";
import { EMemberRole } from "./EMemberRole";

export interface IParticipante extends INomeavel, IIdentificavel {
    role: EMemberRole;
}