import React, { useState, useEffect } from 'react';
import { getPokemons } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';


const CardContainer = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons);
  
    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);


    if (pokemons.length === 0) {
        return <div>
            Loading...
            <img src="https://i.pinimg.com/originals/4e/a2/3e/4ea23e6339937b95a8aa5cd08eeb3266.gif" alt="loading" />
        </div>      
    } 
        return (
        <div>
                <h1>CardContainer</h1>
                {pokemons.map((p) => { 
                    return (
                        <div key={p.id}>
                            <h1>Name: {p.name}</h1>
                            <img src={p.image} alt={p.name} />
                            <h3>Type: { p.type[1] ? p.type[0] + ' ' + p.type[1] : p.type }</h3>
                        </div>
                    )
                })}
     </div>
    );
};


export default CardContainer;