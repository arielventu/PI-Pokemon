import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons } from '../../actions';


const PokemonDetail = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.pokemons)

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(getPokemons())
    }
  }, [])


  
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

export default PokemonDetail