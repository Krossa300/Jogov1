import React from 'react';

type DisplayMode = 'esquerda' | 'direita' | 'minificado';

interface GameItemDisplayProps {
    mode: DisplayMode;
    imageAlt?: string;
    title?: string;
    description?: string;
}

const placeholderImage = 'https://placehold.co/100';

export const GameItemDisplay: React.FC<GameItemDisplayProps> = ({
    mode,
    imageAlt = 'Imagem do jogo',
    title = 'Título do Jogo',
    description = 'Descrição do jogo.',
}) => {
    if (mode === 'minificado') {
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={placeholderImage} alt={imageAlt} style={{ width: 50, height: 50 }} />
            </div>
        );
    }

    const content = (
        <>
            <img src={placeholderImage} alt={imageAlt} style={{ width: 100, height: 100, marginRight: mode === 'esquerda' ? 16 : 0, marginLeft: mode === 'direita' ? 16 : 0 }} />
            <div>
                <h3 style={{ margin: 0 }}>{title}</h3>
                <p style={{ margin: 0 }}>{description}</p>
            </div>
        </>
    );

    return (
        <div style={{ display: 'flex', flexDirection: mode === 'esquerda' ? 'row' : 'row-reverse', alignItems: 'center' }}>
            {content}
        </div>
    );
};