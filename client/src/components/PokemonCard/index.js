import React from 'react';
import './PokemonCard.css';

const PokemonCard = ({name, id, image, type, attack}) => {
  return (
		<div className='pokemon-card'>
			<h1>Name:{name}</h1>
			<img src={image} alt={name} width="105" height="105" />
		  <h2>Attack: {attack}</h2>
		  console.log({attack})
		  <div className='div-type'>
				{type &&
					type.map((el, i) => (
						<div key={i} className='{cssButtonType(el)}'>
							<p key={i} className='p'>
								{el}
							</p>
						</div>
				))}
			</div>
      </div>
  )
}


export default PokemonCard;