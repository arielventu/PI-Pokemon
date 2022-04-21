import React, { useState, useEffect } from 'react';
import { getPokemons } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import PokemonCard from '../PokemonCard';
import { LOADING_IMG } from '../../utils';
import './CardContainer.css';


const CardContainer = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons);
  
    useEffect(() => {
        if (pokemons.length === 0) { // si no están cargados en el store, se cargan
            dispatch(getPokemons());
        }
    }, []);


    if (pokemons.length === 0) {
        return (
            <div>
                <img src={LOADING_IMG} alt="loading" />
                <h3>Loading...</h3>
            </div>      
        )
    } 
        return (
        <div>
                <h1>CardContainer</h1>
                {pokemons.map((p) => {
                    return <PokemonCard p={p} />}
                )}    
                        
     </div>
    );
};


export default CardContainer;