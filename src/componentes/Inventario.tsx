import React from 'react';
import { GameItemDisplay } from './GameItemDisplay';
import { inventario } from '../simulador/Simulador2';

const tableStyle: React.CSSProperties = {
    borderCollapse: 'collapse',
};

const cellStyle: React.CSSProperties = {
    border: '1px solid #ccc',
    width: 56,
    height: 56,
    padding: 2,
    textAlign: 'center',
};

const Inventario: React.FC = () => {
    const linhas = inventario.grid.celula; // matriz 2D [linha(y)][coluna(x)]

    return (
        <div>
            <h2>Inventário</h2>
            <table style={tableStyle}>
                <tbody>
                    {linhas.map((linha, y) => (
                        <tr key={y}>
                            {linha.map((celula, x) => (
                                <td key={`${y}-${x}`} style={cellStyle}>
                                    {celula && (
                                        <GameItemDisplay
                                            mode="minificado"
                                            imageAlt={`Célula ${y},${x}`}
                                            title={celula.conteudo.nome}
                                            description={celula.conteudo.descricao}
                                        />
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Inventario;