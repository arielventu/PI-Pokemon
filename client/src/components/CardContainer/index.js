import React, { useState, useEffect } from 'react';
import { getPokemons } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import PokemonCard from '../PokemonCard/';
import { LOADING_IMG } from '../../utils';
import './CardContainer.css';


const CardContainer = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons);
  
    useEffect(() => {
        if (pokemons.length === 0) { // si no están cargados en el store, se cargan
            dispatch(getPokemons());
        }
    }, [dispatch]);
    
    // console.log(pokemons);

    if (pokemons.length === 0) {
        return (
            <div>
                <img src={LOADING_IMG} alt="loading" />
                <h3>Loading...</h3>
            </div>
        )
    } else {
        return (
            <div className={`${style.CardsDiv}`}>
              {props && props.cities.map((city) => (
                <Card
                  key={city.id}
                  id={city.id}
                  max={city.main.temp_max}
                  min={city.main.temp_min}
                  name={city.name}
                  img={city.weather[0].icon}
                  onClose={() => alert(city.name)}
                />
              ))}
            </div>
          )
                
}
}

            

            


         {/* //                     <div key={p.id}>
         //                         <h1>Name: {p.name}</h1>
         //                         <img src={p.image} alt={p.name} />
         //                         <h3>Type: { p.type[1] ? p.type[0] + ' ' + p.type[1] : p.type }</h3>
         //                     </div> */}
export default CardContainer;