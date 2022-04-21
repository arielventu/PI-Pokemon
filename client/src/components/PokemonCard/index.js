import React from 'react';


const PokemonCard = (name, image, type, id) => {

  return (
    <div>
      <h1>PokemonCard</h1>
         <div key={id}>
              <h1>Name: {name}</h1>
              <img src={image} alt={name} />
              <h3>Type: { type[1] ? type[0] + ' ' + type[1] : type }</h3>
          </div>
    </div>
  )
}

export default PokemonCard;