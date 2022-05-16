import React from 'react';
import style from './PokemonCard.module.css';

export default function PokemonCard ({name, id, image, type, attack}) {

return (
	<div className={`${style.divCard}`}>
		<h1 className={`${style.name}`}>{name}</h1>
		<img className={`${style.image}`} src={image} alt={name} />
		<div className={`${style.divTypes}`} >
			{type && type.map((type, index) => (
				<div key={index} className={`${style[type]}`}>
						{type}
				</div>
			))}
		</div>
	</div>
)
}

