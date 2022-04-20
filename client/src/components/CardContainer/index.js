import React, { useState, useEffect } from 'react';
import { getPokemons } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';


const CardContainer = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons);
  
    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);

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