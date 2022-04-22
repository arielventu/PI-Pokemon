import React from 'react';
import './PokemonCard.css';



export default function PokemonCard ({name, id, image, type}) {
  
  return (
      
			<div className='pokemon-card'>
          <h1>Name:{name}</h1>
          <img src={image} alt={name} />
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

