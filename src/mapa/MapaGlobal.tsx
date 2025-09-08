import React from 'react';
import CelulaMapa from './CelulaMapa';

const MapaGlobal: React.FC = () => {
    const worldMap: string[] = [
    "AAAAAAAAAAAA",
    "AAAMMMAAFFFF",
    "AAMMCCAPFFPP",
    "AMMCCCAPPFFP",
    "AAMMCCCAPPFP",
    "AAAMMMAPPFFP",
    "PPPFFFPPFFPP",
    "PPPPFFFPPFFP",
    "PPPFFFPPFFPP",
    "PPFFAAAAMPPP",
    "PPFFAAAAMPPP",
    "AAAAAAAAAAAA",
    ];
    return (
        <div style={{ width: '100%', height: '100%', background: '#e0e0e0', alignItems: 'center', justifyContent: 'center' }}>
            {worldMap.map((row, y) => (
                <div key={y} style={{ lineHeight: 1 }}>
                    {Array.from(row).map((cell, x) => (
                   <CelulaMapa texto={cell} x={x} y={y} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default MapaGlobal;