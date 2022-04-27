import React, { useState, useEffect } from 'react';
import { getPokemons, getTypes, filterByOrigin, filterByType, sort } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PokemonCard from '../PokemonCard';
import Pagination from '../Pagination';
import { LOADING_IMG } from '../../utils';
import './Home.css';


const Home = () => {

    // **************************************************************************************
    // ********************************STATE & CONSTANTS*************************************

    // Información de los pokemons
    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons);
    const allTypes = useSelector((state) => state.types);
  
    // Paginación 
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(4);
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

    // Ordenamiento
    const [order, setOrder] = useState('Desc'); // Descendente x defecto
    const [orderBy, setOrderBy] = useState('id'); // Ordenado x ID x defecto


    // **************************************************************************************
    // **************************************FUNCTIONS****************************************
    
    // Función para cambiar la página
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    // Obtengo los datos del store 

    useEffect(() => {
            dispatch(getPokemons());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])


    const handleFilterByOrigin = (e) => {
        dispatch(filterByOrigin(e.target.value));
    };

    const handleFilterByType = (e) => {
        dispatch(filterByType(e.target.value));
    };

    const sortBy = (orderBy) => {
        if (order === 'Asc') {
            
            setOrder('Desc');
        } else {
            dispatch(sort(orderBy, 'Desc'));
            setOrder('Asc');
        }
        setOrderBy(orderBy);
    }

        

    // Render ********************************************************************************

    if (currentPokemons.length === 0) {
        return (
            <div>
                <img src={LOADING_IMG} alt="loading" />
                <h3>Loading...</h3>
            </div>
        )
    } else {
        return (
            <div className='home'>
                <div className='home-header'>
                    <h1>Origin</h1>
                    <select onChange={(e) => handleFilterByOrigin(e)}>
                        <option value='All'>All</option>
                        <option value='PokeAPI'>PokeAPI</option>
                        <option value='Created'>Created</option>
                    </select>
                    <h1>Type</h1>
                    <select onChange={(e) => handleFilterByType(e)}>
                        <option value='All'>All</option>
                        {allTypes.map((type) => (
                                <option key={type.id} value={type.name}>
                                    {type.name}
                                </option>
                        ))}
                    </select>
                    <h1>Sort</h1>
                    <select onChange={(e) => sortBy(e.target.value)}>
                        <option value='id'>ID</option>
                        <option value='name'>Name</option>
                        <option value='attack'>Attack</option>
                    </select>
                    <h1>Order</h1>
                    <button onClick={() => sortBy(orderBy)}>{order}</button>
                    <h1>Pokemons</h1>
                        <Pagination 
                            pokemonsPerPage={pokemonsPerPage}
                            allPokemons={allPokemons.length}
                            pagination={pagination}
                        />
                   
                </div>
                <div className='home-body'>
                    {currentPokemons?.map((p) => (
                        // console.log(p.type)
                        <Link to={`/pokemon/${p.id}`} key={p.id}>
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
    
    
export default Home;