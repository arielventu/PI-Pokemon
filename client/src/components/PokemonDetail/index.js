import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons, getPokemonDetails } from '../../actions';
import { Link } from 'react-router-dom';


export default function PokemonDetail () {
  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.pokemons)
  const pokemonDetails = useSelector(state => state.detailPokemon)
  const pokemonFound = pokemons.find(pokemon => pokemon.id === pokemonDetails.id)

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(getPokemons())
    }
  }, [dispatch, pokemons])


  
  return (
    <div>
      {/* <h1>Pokemon Detail</h1>
        <div>
          {pokemons.map(pokemon => (
            <div key={pokemon.id}>
              <h2>{pokemon.name}</h2>
              <img src={pokemon.image} alt={pokemon.name} width="105" height="105" />
              <div>
                {pokemon.type && pokemon.type.map((type, i) => (
                  <div key={i} className={`type ${type}`}>
                    <p key={i}>{type}</p>
                  </div>
                ))}
              </div>
            </div>
          ))} 
        </div>            */}
    </div>
  )
}
