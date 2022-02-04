import React from 'react';
import TypeContainer from '../TypeContainer/TypeContainer';
import './PokemonCard.css';

const PokemonCard = ({ id, name, types, sprite }) => {
    return (
        <div className="pokemon-card">
            <p>{id}</p>
            <h3>{name}</h3>
            <div className="sprite-container">
                <img src={sprite} alt="pokemon name"/>
            </div>
            <div className="types-container">
                {types.map((elem) => {
                    return (
                        <TypeContainer name={elem.type.name} />
                    )
                })}
            </div>
        </div>
    )
}

export default PokemonCard;