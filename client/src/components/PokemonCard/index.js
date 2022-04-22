import React from 'react';



export default function PokemonCard (name, id, image, type) {
  const p = name;
  return (
      
			<div>
          <h1>Name:{p.name}</h1>
          <img src={p.image} alt={p.name} />
      <h3>
        {p.type.map(
          (t) => ( <span>{t}</span> )
          )}</h3>
      </div>
		
  )
}

