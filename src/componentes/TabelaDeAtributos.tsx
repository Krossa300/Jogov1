import React from 'react';
import { atributos } from '../Simulador/Simulador';

const TabelaDeAtributos: React.FC = () => (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Valor</th>
            </tr>
        </thead>
        <tbody>
            {atributos.map(attr => (
                <tr key={attr.atributo.id}>
                    <td>{attr.atributo.id}</td>
                    <td>{attr.atributo.nome}</td>
                    <td>{attr.valor}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default TabelaDeAtributos;