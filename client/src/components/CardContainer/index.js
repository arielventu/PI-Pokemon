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
                            <h1>{p.name}</h1>
                            <img src={p.image} alt={p.name} />
                        </div>
                    )
                })}
          
     </div>
    );
};


export default CardContainer;