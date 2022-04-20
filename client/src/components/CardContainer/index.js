import React, { useState, useEffect } from 'react';
import { getPokemons } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';



const CardContainer = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);

    const handleSelectPokemon = (pokemon) => {
        setSelectedPokemon(pokemon);
    }

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const filteredPokemons = pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div>
          <h1>CardContainer</h1>
          
     </div>
    );
};


export default CardContainer;