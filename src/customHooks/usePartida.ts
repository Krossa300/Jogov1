import { useContext } from 'react';
import { PartidaContext } from '../customContext/PartidaContext';

export function usePartida() {
  const ctx = useContext(PartidaContext);
  if (!ctx) {
    throw new Error('usePartida deve ser usado dentro de um <PartidaProvider>');
  }
  return ctx;
}
