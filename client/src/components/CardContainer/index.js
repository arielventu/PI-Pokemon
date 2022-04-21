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
    }, [dispatch]);
    
    // console.log(pokemons);

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
                {/* <h1>CardContainer</h1> */}
                {pokemons && pokemons.map((p) => { 
                    return (
                        // <div key={p.id}>
                        //     <h1>Name: {p.name}</h1>
                        //     <img src={p.image} alt={p.name} />
                        //     <h3>Type: { p.type[1] ? p.type[0] + ' ' + p.type[1] : p.type }</h3>
                        // </div>
                        <div>
                            <li>
                                <PokemonCard name={p.name} image={p.image} />
                            </li>
                        </div>    
                    )
                })}
     </div>
    );
};


export default CardContainer;