import React from 'react';
import { useNavigate } from 'react-router';

interface CelulaMapaProps {
    texto: string;
    x: number;
    y: number;
}

const CelulaMapa: React.FC<CelulaMapaProps> = ({ texto, x, y }) => {
    const navigate = useNavigate();
    return (
             <span key={`${x}-${y}`} style={{ display: 'inline-block', margin: '2px' }}
             onClick={() => navigate(`/map/${x}/${y}/${texto}`)}>
                            {texto === 'A' && <span role="img" aria-label="water">🌊</span>}
                            {texto === 'M' && <span role="img" aria-label="mountain">⛰️</span>}
                            {texto === 'C' && <span role="img" aria-label="forest">🌲</span>}
                            {texto === 'F' && <span role="img" aria-label="tree">🌳</span>}
                            {texto === 'P' && <span role="img" aria-label="plain">🌾</span>}
                        </span>
    );
};

export default CelulaMapa;