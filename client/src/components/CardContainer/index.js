import React, { useState, useEffect } from 'react';
import { getPokemons } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import PokemonCard from '../PokemonCard/';
import { LOADING_IMG } from '../../utils';
import './CardContainer.css';


const CardContainer = () => {

    // **************************************************************************************
    // ********************************STATE & CONSTANTS*************************************

    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons);
  
    const pokemonsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsToShow, setPokemonsToShow] = useState([]);

    // **************************************************************************************
    // **************************************FUNCTIONS****************************************
    
    useEffect(() => {
        if (pokemons.length === 0) { // si no están cargados en el store, se cargan
            dispatch(getPokemons());
        }
    }, []);

    

    const nextHandler = () => {
        console.log("next");
        if (currentPage < Math.ceil(pokemons.length / pokemonsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    }

    const prevHandler = () => {
        console.log("prev");
    }




    
    // console.log(pokemons);

    if (pokemons.length === 0) {
        return (
            <div>
                <img src={LOADING_IMG} alt="loading" />
                <h3>Loading...</h3>
            </div>
        )
    } else {
        return (
            <div className='card-container'>
                <div className='card-container-row'>
                    {pokemons.map((p) => (
                        // console.log(p.type)
                        <PokemonCard
                            key={p.id}
                            name={p.name}
                            image={p.image}
                            type={p.type}
                            />
                    ))}
                </div>
                <div className='card-container-footer'>
                    <button onClick={prevHandler}>Prev</button>
                    <button onClick={nextHandler}>Next</button>
                    </div>

                </div>
            )
            
        }
    }
    
    
export default CardContainer;