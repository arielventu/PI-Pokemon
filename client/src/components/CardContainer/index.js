import React, { useState, useEffect } from 'react';
import { getPokemons } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import PokemonCard from '../PokemonCard';
import { LOADING_IMG } from '../../utils';
import './CardContainer.css';


const CardContainer = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons);
  
    useEffect(() => {
        if (pokemons.length === 0) { // si no están cargados en el store, se cargan
            dispatch(getPokemons());
        }
    }, []);


    // if (pokemons.length === 0) {
    //     return (
    //         <div>
    //             <img src={LOADING_IMG} alt="loading" />
    //             <h3>Loading...</h3>
    //         </div>      
    //     )
    // } 
    //     return (
    //     <div>
    //             <h1>CardContainer</h1>
    //             {pokemons.map((p) => {
    //                 return <PokemonCard name={p.name} image={p.image } type={p.type} />}
    //             )}    
                        
    //  </div>
    // );
    <div className='div_card_container'>
			{pokemons.length ? (
				<div className='div_card'>
					{pokemons.map((pokes) => (
						<PokemonCard
							name={pokes.name}
							image={pokes.image}
							hp={pokes.type}
						/>
					))}
				</div>
			) : (
				<div className='not_found_div'>
                <h1>Pokemon NOT FOUND!!</h1>
                {/* <img src={error} width="170" height="170" alt='Error img'/> */}
            </div>
			)}
		</div>
};


export default CardContainer;