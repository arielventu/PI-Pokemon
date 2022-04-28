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
          <img src={pokemonDetail.image} alt={pokemonDetail.name} width="105" height="105"/>
          <h1>{pokemonDetail.name}</h1>
          <p>Type: {type && type.map((el, i) => (
					<div key={i} className='{cssButtonType(el)}'>
						<p key={i} className='p'>
							{el}
						</p>
					</div>
				))}</p>
          <p>HP: {pokemonDetail.hp}</p>
          <p>Attack: {pokemonDetail.attack}</p>
          <p>Defense: {pokemonDetail.defense}</p>
          <p>Speed: {pokemonDetail.speed}</p>
          <p>Height: {pokemonDetail.height}</p>
          <p>Weight: {pokemonDetail.weight}</p>
        </div>
        }
    
      
    </div>
  )
}
