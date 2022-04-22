import React from 'react';



export default function PokemonCard ({name, id, image, type}) {
  
  return (
      
			<div>
          <h1>Name:{name}</h1>
          <img src={image} alt={name} />
          <div className='div_type_container'>
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

