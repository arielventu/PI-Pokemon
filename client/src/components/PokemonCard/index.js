import React from 'react';



export default function PokemonCard ({name, id, image, type}) {
  
  return (
      
			<div>
          <h1>Name:{name}</h1>
          <img src={image} alt={name} />
          <h3>Type: { type}</h3>
        {/* {p.type.map(
          (t) => ( <span>{t}</span> )
          )} */}
      </div>
		
  )
}

