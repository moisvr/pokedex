import React, { useEffect, useState } from 'react';
import PokemonCard from './components/PokemonCard/PokemonCard';
import SearchForm from './components/SearchForm/SearchForm';
import './App.css';

const App = () => {

  const [pokemonList, setPokemonList] = useState([]);
  const [detailPokemonList, setDetailPokemonList] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    if(pokemonList.response){
      pokemonList.response.results.forEach((element, index) => {
        getPokemon(element);
      });
    }
  }, [pokemonList]);

    
    React.useMemo(() => {
      const result = detailPokemonList.filter((pokemons) => {
        return `${pokemons.name}`
        .toLowerCase()
        .includes(search.toLowerCase())
      });

      setFilteredPokemons(result);
    }, [search])

  const getList = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=150`, {
      method: 'GET',
      headers: {
        "Content-Type" : "application/vnd.github.v3+json"
        }
    })
      .then(response => response.json())
      .then(response => {
          setPokemonList({response});
      })
  }

  const getPokemon = (element) => {
    fetch(`${element.url}`, {
      method: 'GET',
      headers: {
        "Content-Type" : "application/vnd.github.v3+json"
        }
    })
      .then(response => response.json())
      .then(response => {
          setDetailPokemonList(detailPokemonList => [...detailPokemonList, response]);
      });
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  }


  if(filteredPokemons.length === 0){
    return (
      <div className="container">
          <h1>Welcome to the pokedex!</h1>
          <p>List of pokemons</p>
          <SearchForm getSearch={handleChange} />
          <div className="pokemons-container">
            {detailPokemonList.map((elem) => {
              return (
                <PokemonCard 
                  key={elem.id} 
                  id={elem.id}
                  name={elem.name}
                  types={elem.types}
                  sprite={elem.sprites.front_default}
                />
              )
            })}
          </div>
      </div>
    );
  }else{
    return (
      <div className="container">
          <h1>Welcome to the pokedex!</h1>
          <p>List of pokemons</p>
          <SearchForm getSearch={handleChange} />
          <div className="pokemons-container">
            {filteredPokemons.map((elem) => {
              return (
                <PokemonCard 
                  key={elem.id} 
                  id={elem.id}
                  name={elem.name}
                  types={elem.types}
                  sprite={elem.sprites.front_default}
                />
              )
            })}
          </div>
      </div>
    );
  }


}

export default App;
