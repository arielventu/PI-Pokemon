import React, { useState, useEffect } from 'react';
import ALL_POKES from '../../utils';
import { getPokemons } from '../../actions';



const CardContainer = () => {
    
        

  return (
      <div>
          <h1>CardContainer</h1>
          <div className="card-container">
              {pokemon.map(pokemon => (
                  <div className="card" key={pokemon.id}>
                      <h2>{pokemon.name}</h2>
                      <img src={pokemon.image} alt={pokemon.name} />
                  </div>
              ))}
              
          </div>
      </div>
  )
};


export default CardContainer;