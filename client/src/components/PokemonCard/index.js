import React from 'react';
import style from './PokemonCard.module.css';

export default function PokemonCard ({name, id, image, type, attack}) {

		
	

return (
	<div className={`${style.divCard}`}>
		<h1 className={`${style.name}`}>{name}</h1>
		<img src={image} alt={name} width="105" height="105" />
		<div className={`${style[type[0]]}`}>
			{type && type.map((type, index) => (
				<div key={index} className={`${style.divType}`}>
					{/* <p key={index} className={`${style[type]}`} > */}
					<p key={index}  >
						{type}
					</p>
				</div>
			))}
		</div>
	</div>
)
}

