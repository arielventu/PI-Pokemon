import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons, getPokemonDetails, clearPokemonDetails } from '../../actions';
import { Link } from 'react-router-dom';
import PokeNotFound from '../NotFound/PokeNotFound.js';
import style from './PokemonDetail.module.css';
import {LOADING_IMG} from '../../utils';


export default function PokemonDetail (props) {
  console.log(props);
  
  const dispatch = useDispatch()
  const pokemonDetail = useSelector(state => state.detailPokemon)

  useEffect(() => {
    dispatch(clearPokemonDetails())
    dispatch(getPokemonDetails(props.match.params.id))
  }, [dispatch])

  // console.log(pokemonDetail.name);

  if (pokemonDetail.hasOwnProperty()) {
    return (
      <div className={`${style.divLoading}`}>
        <img src={LOADING_IMG} alt="loading" width="150" height="150" />
        {/* <img src={LOADING_IMG} alt="loading" className={`${style.imgLoading}`} /> */}
        <h3 className={`${style.loadingText}`} data-text="Loading...">Loading...</h3>
      </div>
    )
  } else if (pokemonDetail === 'Pokemon not found') {
    return <PokeNotFound />
  } else {
  return (
    <div>
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
}
