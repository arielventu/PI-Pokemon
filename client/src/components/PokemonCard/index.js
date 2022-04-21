import React from 'react';


const PokemonCard = () => {

  return (
    <div>
      <h1>PokemonCard</h1>
         <div key={p.id}>
              <h1>Name: {p.name}</h1>
              <img src={p.image} alt={p.name} />
              <h3>Type: { p.type[1] ? p.type[0] + ' ' + p.type[1] : p.type }</h3>
          </div>
    </div>
  )
}

export default PokemonCard