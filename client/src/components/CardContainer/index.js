import React, { useState, useEffect } from 'react';
import { getPokemons } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import PokemonCard from '../PokemonCard/';
// import { LOADING_IMG } from '../../utils';
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

    // Order
    const [order, setOrder] = useState('A'); // A: ascendente, D: descendente
    const [orderBy, setOrderBy] = useState('id'); // Default


    // **************************************************************************************
    // **************************************FUNCTIONS****************************************
    
    useEffect(() => {
        if (pokemons.length === 0) { // si no están cargados en el store, se cargan
            dispatch(getPokemons());
        }
    }, []);

    

    // Funciones de paginado
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

    // Función para mostrar los pokemons de la página actual
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);

        // Ordenar
        if (order === 'A') {
            const sortedPokemons = pokemons.sort((a, b) => a[orderBy] - b[orderBy]);
            setPokemonsToShow(sortedPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon));
        } else if (order === 'D') {
            const sortedPokemons = pokemons.sort((a, b) => b[orderBy] - a[orderBy]);
            setPokemonsToShow(sortedPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon));
        } else {
            setPokemonsToShow(currentPokemons);
        }
    }

    // Función para ordenar los pokemons
    const sortPokemons = (order, orderBy) => {
        setOrder(order);
        setOrderBy(orderBy);
        setCurrentPage(1);
        paginate(1);
    }

    // Función para mostrar los números de página
    const showPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(pokemons.length / pokemonsPerPage); i++) {
            pageNumbers.push(i);
        }
        setPageNumbers(pageNumbers);
    }

    // Función para mostrar los pokemons de la página actual
    useEffect(() => {
        showPageNumbers();
        paginate(currentPage);
    }, [pokemons]);

    return (
        <div className='card-container'>
            <div className='card-container-header'>
                <h1>Pokemons</h1>
                <div className='div-order'>
                    <button className={order === 'A' ? 'btn-order-active' : 'btn-order'} onClick={() => sortPokemons('A', 'id')}>ID</button>
                    <button className={order === 'A' ? 'btn-order' : 'btn-order-active'} onClick={() => sortPokemons('D', 'name')}>Name</button>
                </div>
            </div>
            <div className='card-container-body'>
                {pokemonsToShow.map((pokemon, i) => (
                    <PokemonCard key={i} name={pokemon.name} id={pokemon.id} image={pokemon.image} type={pokemon.type} />
                ))}
            </div>
            <div className='card-container-footer'>
                <div className='div-pagination'>
                    <button className='btn-pagination' onClick={() => paginate(currentPage - 1)}>&lt;</button>
                    {pageNumbers.map((pageNumber, i) => (
                        <button key={i} className={currentPage === pageNumber ? 'btn-pagination-active' : 'btn-pagination'} onClick={() => paginate(pageNumber)}>{pageNumber}</button>
                    ))}
                    <button className='btn-pagination' onClick={() => paginate(currentPage + 1)}>&gt;</button>
                </div>
            </div>
        </div>
    );
}



    // const nextHandler = () => {
    //     // console.log(currentPage);
    //     if (currentPage < Math.ceil(pokemons.length / pokemonsPerPage)) {// Calcula el número de páginas totales y verifica que no se pase del límite de páginas
    //         setCurrentPage(currentPage + 1);
    //     }
    // }

    // const prevHandler = () => {
    //     // console.log(currentPage);
    //     if (currentPage > 1) { // Verifica que no se pase del límite inferior
    //         setCurrentPage(currentPage - 1);
    //     }
    // }

    // const goToPageHandler = (page) => {
    //     setCurrentPage(page); // Cambia la página actual 
    // }

    // const pageNumbersHandler = () => { 
    //     const pageNumbers = []; // Array para guardar los números de páginas
    //     for (let i = 1; i <= Math.ceil(pokemons.length / pokemonsPerPage); i++) { 
    //         pageNumbers.push(i); 
    //     }
    //     setPageNumbers(pageNumbers); // Guarda los números de páginas en el array
    // }

    // useEffect(() => {
    //     const indexOfLastPokemon = currentPage * pokemonsPerPage;
    //     const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    //     setPokemonsToShow(pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon));
    //     pageNumbersHandler();
    // }, [currentPage, pokemons]);
    


    
    // console.log(pokemons);

    // if (pokemons.length === 0) {
    //     return (
    //         <div>
    //             <img src={LOADING_IMG} alt="loading" />
    //             <h3>Loading...</h3>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div className='card-container'>
    //             <div className='card-container-row'>
    //                 {pokemonsToShow.map((p) => (
    //                     // console.log(p.type)
    //                     <PokemonCard
    //                         key={p.id}
    //                         name={p.name}
    //                         image={p.image}
    //                         type={p.type}
    //                         />
    //                 ))}
    //             </div>
    //             <div className='card-container-footer'>
    //                 <button onClick={prevHandler}>Prev</button>
    //                 <>
    //                     {currentPage}
    //                     {pageNumbers.map((page) => (
    //                         <button key={page} onClick={() => goToPageHandler(page)}>
    //                             {page}
    //                         </button>
    //                     ))}
    //                 </>
    //                 <button onClick={nextHandler}>Next</button>
    //                 </div>

    //             </div>
    //         )
            
    //     }
    // }
    
    
export default CardContainer;