import React from 'react';



const PokemonCard = (name, image, type) => {
  console.log(name);
  console.log(image);
  console.log(type);
  
  return (

			<div>
          <h1>{name}</h1>
          <img src={image} alt={name} />
          {/* <h3>Type: { type[1] ? type[0] + ' ' + type[1] : type }</h3> */}
      </div>
		
  )
}

export default PokemonCard;