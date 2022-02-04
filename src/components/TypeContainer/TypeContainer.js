import React from 'react';
import './TypeContainer.css';

const TypeContainer = ({ name }) => {
    return (
        <div className="type">
            <p>{name}</p>
        </div>
    )
}

export default TypeContainer;