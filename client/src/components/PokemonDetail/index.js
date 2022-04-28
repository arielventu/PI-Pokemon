import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons, getPokemonDetails } from '../../actions';
import { Link } from 'react-router-dom';


export default function PokemonDetail (props) {
  // console.log(props);
  
  const dispatch = useDispatch()
  // const pokemons = useSelector(state => state.pokemons)
  const pokemonDetail = useSelector(state => state.detailPokemon)
  // const pokemonFound = pokemons.find(pokemon => pokemon.id === pokemonDetail.id)

  useEffect(() => {
    dispatch(getPokemonDetails(props.match.params.id))
  }, [dispatch])

  console.log(pokemonDetail.name);
  return (
    <div>
      {pokemonDetail && 
        <div>
          <h1>{pokemonDetail.name}</h1>
          <img src={pokemonDetail.image} alt={pokemonDetail.name} />
          <p>{pokemonDetail.description}</p>
          <p>{pokemonDetail.type}</p>
          <p>{pokemonDetail.hp}</p>
          <p>{pokemonDetail.attack}</p>
          <p>{pokemonDetail.defense}</p>
          <p>{pokemonDetail.speed}</p>
          <p>{pokemonDetail.height}</p>
          <p>{pokemonDetail.weight}</p>
        </div>
        }
    
      
    </div>
  )
}
