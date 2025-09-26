import React from 'react';
import { usePartida } from '../customHooks/usePartida';

const BotaoDeInicio: React.FC = () => {
	const { partida, setPartida } = usePartida();

	const onClick = () => {
	if (!partida) return;
	partida.iniciar();
	// Atualiza o estado do contexto para disparar re-render global
	setPartida({ ...partida });
	// Opcional: feedback rápido no console
	console.log('Partida iniciada?', partida.isIniciada, 'Em andamento?', partida.isAndamento);
	};

	return (
		<div>
			<button onClick={onClick} style={{ padding: '8px 16px', cursor: 'pointer' }}>
				Iniciar Partida
			</button>
			{/*Renderiza o "mundo" após iniciar. Usa criarMundo() se existir; caso contrário, um fallback simples. */}
            <div style={{ marginTop: 8 }}>
				{partida?.criarMundo?.() ?? (partida?.isIniciada ? <div>Mundo criado! Pronto para jogar.</div> : null)}
			</div>
		</div>
	);
};

export default BotaoDeInicio;
