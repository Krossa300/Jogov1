import React from 'react';
import { IPartida } from '../partida/interfaces/IPartida';

export type PartidaContextValue = {
  partida: IPartida | null;
  setPartida: React.Dispatch<React.SetStateAction<IPartida | null>>;
};

export const PartidaContext = React.createContext<PartidaContextValue | undefined>(undefined);
