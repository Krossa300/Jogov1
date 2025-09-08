import React from 'react';
import { useParams } from 'react-router';

const DetalheMapa: React.FC = () => {
    const { x, y, texto } = useParams<{ x: string; y: string; texto: string}>();
    return (
        <>
        {texto === 'A' && <span role="img" aria-label="water">🌊 {x} {y}</span>}
        {texto === 'M' && <span role="img" aria-label="mountain">⛰️ {x} {y}</span>}
        {texto === 'C' && <span role="img" aria-label="forest">🌲 {x} {y}</span>}
        {texto === 'F' && <span role="img" aria-label="tree">🌳 {x} {y}</span>}
        {texto === 'P' && <span role="img" aria-label="plain">🌾 {x} {y}</span>}</>
);
};

export default DetalheMapa;