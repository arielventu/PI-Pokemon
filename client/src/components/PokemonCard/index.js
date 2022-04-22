import React from 'react';



export default function PokemonCard (id, name, image, type) {
  console.log(id);
  const p = name;
  return (
      
			<div>
          <h1>Name:{p.name}</h1>
          <img src={p.image} alt={p.name} />
      
        {p.type.map(
          (t) => ( <span>{t}</span> )
          )}
      </div>
		
  )
}

