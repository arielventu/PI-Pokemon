import React, { useState, useEffect } from 'react';
import { getPokemons } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import PokemonCard from '../PokemonCard/';
import { LOADING_IMG } from '../../utils';
import './CardContainer.css';


const CardContainer = () => {

    // **************************************************************************************
    // ********************************STATE & CONSTANTS*************************************

    // Información de los pokemons
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons);
  
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
    

    // Obtengo los pokemons del store 

    useEffect(() => {
        if (pokemons.length === 0) { // si no están cargados en el store, se cargan
            dispatch(getPokemons());
        }
    }, []);

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
    
    // Ordenamiento **************************************************************************

    const sortBy = (orderBy) => {
        // if (order === 'Ascendente') {
        //     setOrder('Descendente');
        // } else {
        //     setOrder('Ascendente');
        // }
        order === 'Descendente'
            ? setPokemonsToShow(pokemonsToShow.sort((a, b) => (a[orderBy] > b[orderBy]) ? 1 : -1))
            : setPokemonsToShow(pokemonsToShow.sort((a, b) => (a[orderBy] < b[orderBy]) ? 1 : -1))
        setOrderBy(orderBy);
    }

    // (function sortPokemons (p) { // Función para ordenar la lista de pokemons
    //     if (order === 'Ascendente') {
    //         return p.sort((a, b) => (a[orderBy] > b[orderBy]) ? 1 : -1);
    //     } else {
    //         return p.sort((a, b) => (a[orderBy] < b[orderBy]) ? 1 : -1);
    //     }
    // })(pokemonsToShow); // Se autoejecuta la función y se pasa como parámetro la lista de pokemons

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
            <div className='card-container'>
                <div className='card-container-header'>
                    <h1>Pokemons</h1>
                    <div className='card-container-header-order'>
                        <select onChange={(e) => sortBy(e.target.value)}>
                            <option value='id'>ID</option>
                            <option value='name'>Name</option>
                            <option value='type'>Type</option>
                        </select>
                        <button onClick={() => sortBy(orderBy)}>{order}</button>
                    </div>
                </div>
                <div className='card-container-body'>
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
                <div className='card-container-footer'>
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