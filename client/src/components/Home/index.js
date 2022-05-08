import React, { useState, useEffect } from 'react';
import { getPokemons, getTypes, filterByOrigin, filterByType, sortBy, clearPokemonDetails } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PokemonCard from '../PokemonCard';
import Pagination from '../Pagination';
import { LOADING_IMG } from '../../utils';
import style from './Home.module.css'

export default function Home () {
    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons);
    const allTypes = useSelector((state) => state.types);
  
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

    const [order, setOrder] = useState(''); 

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        dispatch(getPokemons());
        dispatch(getTypes());
        dispatch(clearPokemonDetails());
    }, []);
    
    const handleFilterByOrigin = (e) => {
        dispatch(filterByOrigin(e.target.value));
    };

    const handleFilterByType = (e) => {
        dispatch(filterByType(e.target.value));
    };

    const handleSort = (e) => {
        dispatch(sortBy(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    }

    if (allPokemons.length === 0 || allPokemons === "Pokemon created") {
        return (
            <div className={`${style.divLoading}`}>
                <img src={LOADING_IMG} alt="loading" width="150" height="150" />
                <h3 className={`${style.loadingText}`} data-text="Loading...">Loading...</h3>
            </div>
        )
    } else {
        return (
            <div className={`${style.divContainer}`}>
                <div className={`${style.filters}`}>
                    <div className={`${style.divFilterSource}`}>
                        <select className={`${style.selectFilterSource}`} defaultValue={"default"} onChange={(e) => handleFilterByOrigin(e)}>
                            <option value={"default"} hidden>Origin</option>
                            <option value='All'>All</option>
                            <option value='PokeAPI'>PokeAPI</option>
                            <option value='Created'>Created</option>
                        </select>
                    </div>
                    <div className={`${style.divFilterType}`}>
                        <select className={`${style.selectFilterType}`} defaultValue={"default"} onChange={(e) => handleFilterByType(e)}>
                            <option value={"default"} hidden>Type</option>
                            <option value='All'>All</option>
                            {allTypes.map((type) => (
                                <option key={type.id} value={type.name}>
                                    {type.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={`${style.divFilterOrder}`}>
                        <select className={`${style.selectFilterOrder}`} defaultValue={"default"} onChange={(e) => handleSort(e)}>
                            <option value={"default"} hidden>Order</option>
                            <option value='A-Z'>A-Z</option>
                            <option value='Z-A'>Z-A</option>
                            <option value='Ʌ Attack'>Ʌ Attack</option>
                            <option value='V Attack'>V Attack</option>
                            <option value='id'>ID</option>
                        </select>
                    </div>
                </div>
                <div className={`${style.divCardsContainer}`}>
                    <div className={`${style.cards}`}>
                        {currentPokemons?.map((p) => (
                            <Link to={`/pokemon/${p.id}`} key={p.id} style={{ textDecoration: 'none' }}>
                                <PokemonCard key={p.id} name={p.name} image={p.image} type={p.type} />
                            </Link>
                        ))}
                    </div>
                </div>
                    <div className={`${style.divFooter}`}>
                        <Pagination
                            pokemonsPerPage={pokemonsPerPage}
                            allPokemons={allPokemons.length}
                            pagination={pagination}
                            currentPage={currentPage}
                        />
                    </div>
            </div>
        )
    }
}
    
    
