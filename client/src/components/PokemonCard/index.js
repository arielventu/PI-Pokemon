import React from 'react';



export default function PokemonCard (name) {
  console.log(name);
  return (

			<div>
          {/* <h1>{name}</h1>
          <img src={image} alt={name} /> */}
      {/* <h3>Type: { type[1] ? type[0] + ' ' + type[1] : type }</h3> */}
      <div className='div_name'>{name}</div>
      </div>
		
  )
}
