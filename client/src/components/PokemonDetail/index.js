import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons, getPokemonDetails, clearPokemonDetails } from '../../actions';
import { Link } from 'react-router-dom';
// import NavBar from '../NavBar';


export default function PokemonDetail (props) {
  console.log(props);
  
  const dispatch = useDispatch()
  const pokemonDetail = useSelector(state => state.detailPokemon)

  useEffect(() => {
    dispatch(clearPokemonDetails())
    dispatch(getPokemonDetails(props.match.params.id))
  }, [dispatch])

  // console.log(pokemonDetail.name);
  return (
    <div>
      {/* <NavBar /> */}
      {pokemonDetail && 
        <div>
          <img src={pokemonDetail.image} alt={pokemonDetail.name} width="105" height="105"/>
          <h1>{pokemonDetail.name}</h1>
          <div>
            {pokemonDetail.type && pokemonDetail.type.map((el, i) => (
              <div key={i} className='{cssButtonType(el)}'>
                <p key={i} className='p'>{el}</p>
              </div>
            ))}
          </div>
          <p>HP: {pokemonDetail.hp}</p>
          <p>Attack: {pokemonDetail.attack}</p>
          <p>Defense: {pokemonDetail.defense}</p>
          <p>Speed: {pokemonDetail.speed}</p>
          <p>Height: {pokemonDetail.height}</p>
          <p>Weight: {pokemonDetail.weight}</p>
        </div>
      }
      <Link to='/home'>Back</Link>
    
      
    </div>
  )
}
