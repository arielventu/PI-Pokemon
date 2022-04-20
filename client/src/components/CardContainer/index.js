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
          
     </div>
    );
};


export default CardContainer;