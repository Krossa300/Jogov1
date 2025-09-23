import { IDisplayable } from '../../InterfacesBase/IDisplayable';
import { IIdentificavel } from '../../InterfacesBase/IIdentificavel';
import { INomeavel } from '../../InterfacesBase/INomeavel';
import { IPosicionavel } from '../../InterfacesBase/IPosicionavel';

export interface IBoardItem extends 
IPosicionavel, IIdentificavel, INomeavel, IDisplayable {

}
