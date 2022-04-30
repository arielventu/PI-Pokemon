import React from 'react';
import style from './PokemonCard.module.css';

export default function PokemonCard ({name, id, image, type, attack}) {

	
	const typeColor = (e) => {
	if (type[0].name === 'fire') {
		return '#ff0000'
		}
		if (type[0].name === 'water') {
		return '#0000ff'
		}
		if (type[0].name === 'grass') {
		return '#00ff00'
		}
}

return (
	<div className={`${style.divCard}`}>
		<h1 className={`${style.name}`}>{name}</h1>
		<img src={image} alt={name} width="105" height="105" />
		<div className='div-type'>
			{type && type.map((el, i) => (
				<div key={i} className={`${style[typeColor]}`}>
					<p key={i} className='p'>
						{el}
					</p>
				</div>
			))}
		</div>
	</div>
)
}

