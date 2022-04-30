import React, { useState, useEffect } from 'react';
import { getPokemons, getTypes, filterByOrigin, filterByType, sortBy, clearPokemonDetails } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PokemonCard from '../PokemonCard';
import Pagination from '../Pagination';
import { LOADING_IMG } from '../../utils';
import style from './Home.module.css'


export default function Home () {

    // **************************************************************************************
    // ********************************STATE & CONSTANTS*************************************

    // Información de los pokemons
    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons);
    const allTypes = useSelector((state) => state.types);
  
    // Paginación 
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

    // Ordenamiento
    const [order, setOrder] = useState(''); // Descendente x defecto

    // **************************************************************************************
    // **************************************FUNCTIONS****************************************
    
    // Función para cambiar la página
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    // Obtengo los datos del store 

    useEffect(() => {
        dispatch(getPokemons());
        dispatch(getTypes());
        dispatch(clearPokemonDetails());
    }, [dispatch]);

    // useEffect(() => {
    //     dispatch(getTypes())
    // }, [dispatch])


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

        

    // Render ********************************************************************************

    if (allPokemons.length === 0 || allPokemons === "Pokemon created") {
        return (
            <div>
                <img src={LOADING_IMG} alt="loading" />
                <h3>Loading...</h3>
            </div>
        )
    } else {
        return (
            <div className={`${style.homeContainer}`}>
                <div className={`${style.homeHeader}`}>
                    {/* <h1>Origin</h1> */}
                    <select defaultValue={"default"} onChange={(e) => handleFilterByOrigin(e)}>
                        <option value={"default"} disabled>Origin</option>
                        <option value='All'>All</option>
                        <option value='PokeAPI'>PokeAPI</option>
                        <option value='Created'>Created</option>
                    </select>
                    <h1>Type</h1>
                    <select defaultValue={"default"} onChange={(e) => handleFilterByType(e)}>
                        <option value={"default"} disabled>Type</option>
                        <option value='All'>All</option>
                        {allTypes.map((type) => (
                            <option key={type.id} value={type.name}>
                                {type.name}
                            </option>
                        ))}
                    </select>
                    <h1>Sort</h1>
                    <select defaultValue={"default"} onChange={(e) => handleSort(e)}>
                        <option value={"default"} disabled>Order</option>
                        <option value='A-Z'>A-Z</option>
                        <option value='Z-A'>Z-A</option>
                        <option value='Ʌ Attack'>Ʌ Attack</option>
                        <option value='V Attack'>V Attack</option>
                    </select>
                    <h1>Pokemons</h1>
                    <Pagination
                        pokemonsPerPage={pokemonsPerPage}
                        allPokemons={allPokemons.length}
                        pagination={pagination}
                    />
                   
                </div>
                <div className={`${style.body}`}>
                    {currentPokemons?.map((p) => (
                        // console.log(p.type)
                        <Link to={`/pokemon/${p.id}`} key={p.id} style={{ textDecoration: 'none' }}>
                            <PokemonCard key={p.id} name={p.name} image={p.image} type={p.type} />
                        </Link>
                    ))}
                </div>
                <div className='home-footer'>
                </div>

            </div>
        )
    }
}
    
    
