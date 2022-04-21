import React from 'react';


const PokemonCard = (name, image, type, id) => {

  return (
    <div>
			<div className='div_poke_card'>
				<img className='img' src={image} width="200" height="200" alt='' />
				<div className='div_name'>{name}</div>
				<div className='div_type'>{type}</div>
			</div>
		</div>
  )
}

export default PokemonCard;