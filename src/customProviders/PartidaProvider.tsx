import React, { useMemo, useState } from 'react';
import { PartidaContext } from '../customContext/PartidaContext';
import { IPartida } from '../partida/interfaces/IPartida';
import { partidaMock } from '../simulador/Simuladro3';

interface Props {
  children: React.ReactNode;
}

export function PartidaProvider({ children }: Props) {
  const [partida, setPartida] = useState<IPartida | null>(partidaMock);

  const value = useMemo(() => ({ partida, setPartida }), [partida]);

  return (
    <PartidaContext.Provider value={value}>
      {children}
    </PartidaContext.Provider>
  );
}
