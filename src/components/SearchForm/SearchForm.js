import React from 'react';
import './SearchForm.css';

const SearchForm = ({ getSearch }) => {
    return (
        <div className="search-form">
            <h2>Search for th epokemon you are looking for</h2>
            <input onChange={getSearch} type="text" name="pokemonsearch"/>
        </div>
    )
}

export default SearchForm;