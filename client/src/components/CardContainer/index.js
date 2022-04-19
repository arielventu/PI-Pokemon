import React, { useState, useEffect } from 'react';
import ALL_POKES from '../../utils';
import { getPokemons } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';



const CardContainer = () => {
    const [pokemons, setPokemons] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);

    const pokemonsFromStore = useSelector(state => state.pokemons);

    useEffect(() => {
        setPokemons(pokemonsFromStore);
    }, [pokemonsFromStore]);
  

  return (
      <div>
          <h1>CardContainer</h1>
          <div className="card-container">
              {pokemons.map(pokemon => (
                  <div className="card" key={pokemon.id}>
                      <img src={pokemon.image} alt={pokemon.name} />
                      <h3>{pokemon.name}</h3>
                      <p>{pokemon.types.map(type => type.type.name).join(', ')}</p>
                  </div>
                ))}
          </div>
     </div>
    );
};


export default CardContainer;