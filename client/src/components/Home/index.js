import React, { useState, useEffect } from 'react';
import { getPokemons, getTypes } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import PokemonCard from '../PokemonCard';
import SearchBar from '../SearchBar';
import { LOADING_IMG } from '../../utils';
import './Home.css';


const CardContainer = () => {

    // **************************************************************************************
    // ********************************STATE & CONSTANTS*************************************

    // Información de los pokemons
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons);
    const types = useSelector(state => state.types);
  
    // Paginación 
    const pokemonsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsToShow, setPokemonsToShow] = useState([]);
    const [pageNumbers, setPageNumbers] = useState([]);

    // Ordenamiento
    const [order, setOrder] = useState('Descendente'); // Descendente x defecto
    const [orderBy, setOrderBy] = useState('id'); // Ordenado x ID x defecto


    // **************************************************************************************
    // **************************************FUNCTIONS****************************************
    

    // Obtengo los datos del store 

    useEffect(() => {
        if (pokemons.length === 0) { // si no están cargados en el store, se cargan
            dispatch(getPokemons());
        }
    }, []);

    useEffect(() => {
        if (types.length === 0) { // si no están cargados en el store, se cargan
            dispatch(getTypes());
            // console.log(types);
        }
    }, [dispatch]);

    // Paginación ***************************************************************************

    const nextPageHandler = () => {
        // console.log(currentPage);
        if (currentPage < Math.ceil(pokemons.length / pokemonsPerPage)) {// Calcula el número de páginas totales y verifica que no se pase del límite de páginas
            setCurrentPage(currentPage + 1);
        }
    }

    const prevPageHandler = () => {
        // console.log(currentPage);
        if (currentPage > 1) { // Verifica que no se pase del límite inferior
            setCurrentPage(currentPage - 1);
        }
    }

    const goToPageHandler = (page) => {
        setCurrentPage(page); // Cambia la página actual 
    }

    const pageNumbersHandler = () => { 
        const pageNumbers = []; // Array para guardar los números de páginas
        for (let i = 1; i <= Math.ceil(pokemons.length / pokemonsPerPage); i++) { 
            pageNumbers.push(i); 
        }
        setPageNumbers(pageNumbers); // Guarda los números de páginas en el array
    }

    useEffect(() => {
        const indexOfLast = currentPage * pokemonsPerPage;  
        const indexOfFirst = indexOfLast - pokemonsPerPage;
        setPokemonsToShow(pokemons.slice(indexOfFirst, indexOfLast));
        pageNumbersHandler();
    }, [currentPage, pokemons]); // Si cambia la página, se actualiza el array de números de páginas
    
    // Ordenamiento y Filtrado ****************************************************************

    const sortBy = (orderBy) => {
        if (order === 'Ascendente') {
            setPokemonsToShow(pokemonsToShow.sort((a, b) => (a[orderBy] > b[orderBy]) ? 1 : -1));
            setOrder('Descendente')
        } else {
            setPokemonsToShow(pokemonsToShow.sort((a, b) => (a[orderBy] < b[orderBy]) ? 1 : -1))
            setOrder('Ascendente');
        }
        setOrderBy(orderBy);
    }

    // const filterBy = (type) => {
    //     if (type === 'Todos') {
    //         setPokemonsToShow(pokemonsToShow);
    //     } else {
    //         setPokemonsToShow(pokemons.filter(pokemon => pokemon.type.includes(type)));
    //     }
    // }

    // Render ********************************************************************************

    if (pokemons.length === 0) {
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
                    <h1>Pokemons</h1>
                    <div className='home-header-order'>
                        <select onChange={(e) => sortBy(e.target.value)}>
                            <option value='id'>ID</option>
                            <option value='name'>Name</option>
                            <option value='type'>Type</option>
                        </select>
                        <button onClick={() => sortBy(orderBy)}>{order}</button>
                    </div>
                </div>
                {/* <div calssName='home-header-filter'>
                    <select onChange={(e) => filterBy(e.target.value)}>
                        <option value='Todos'>Todos</option>
                        {types.map(type => <option key={type.id} value={type.name}>{type.name}</option>)}
                    </select>
                </div> */}
                <div className='home-body'>
                    {pokemonsToShow.map((p) => (
                        // console.log(p.type)
                        <PokemonCard
                            key={p.id}
                            name={p.name}
                            image={p.image}
                            type={p.type}
                            />
                    ))}
                </div>
                <div className='home-footer'>
                    <button onClick={prevPageHandler}>&nbsp; &lt; &nbsp;</button>
                        {pageNumbers.map((page) => (
                            <button key={page} onClick={() => goToPageHandler(page)}>
                                {page}
                            </button>
                        ))}
                    <button onClick={nextPageHandler}>&nbsp; &gt; &nbsp;</button>
                        <p> Página: {currentPage}</p>
                    </div>

                </div>
            )
            
        }
    }
    
    
export default CardContainer;