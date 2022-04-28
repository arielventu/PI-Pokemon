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
        </div>
        }
    
      
    </div>
  )
}
