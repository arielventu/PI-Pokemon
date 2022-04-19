import React, { useState, useEffect } from 'react';
import ALL_POKES from '../../utils';



const CardContainer = () => {
    const [pokemon, setPokemon] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchPokemon = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(`${ALL_POKES}`);
            const data = await res.json();
            setPokemon(data);
            setIsLoading(false);
        } catch (err) {
            setError(err);
        }
    };

  return (
      <div>
          <h1>CardContainer</h1>
          <div className="card-container">
              {pokemon.map(pokemon => (
                  <div className="card" key={pokemon.id}>
                      <h2>{pokemon.name}</h2>
                      <img src={pokemon.image} alt={pokemon.name} />
                  </div>
              ))}
              
          </div>
      </div>
  )
};


export default CardContainer;