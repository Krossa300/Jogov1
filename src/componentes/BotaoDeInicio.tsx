import React, { useState } from 'react';
import { partidaMock } from '../Simulador/Simuladro3';

const BotaoDeInicio: React.FC = () => {
	// Estado local apenas para forçar re-render após iniciar a partida
	const [, forceRerender] = useState(0);

	const onClick = () => {
		partidaMock.iniciar();
		// Opcional: feedback rápido no console
		console.log('Partida iniciada?', partidaMock.isIniciada, 'Em andamento?', partidaMock.isAndamento);
		// Força um re-render para que a UI reflita o novo estado
		forceRerender(t => t + 1);
	};

	return (
		<div>
			<button onClick={onClick} style={{ padding: '8px 16px', cursor: 'pointer' }}>
				Iniciar Partida
			</button>
			{/* Renderiza o "mundo" após iniciar. Usa criarMundo() se existir; caso contrário, um fallback simples.
            <div style={{ marginTop: 8 }}>
				{typeof (partidaMock as any).criarMundo === 'function'
					? ((partidaMock as any).criarMundo() as React.ReactNode)
					: (partidaMock.isIniciada ? <div>Mundo criado! Pronto para jogar.</div> : null)}
			</div>
            */}
		</div>
	);
};

export default BotaoDeInicio;
