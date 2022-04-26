import React, { useState, useEffect } from 'react';
import { getPokemons } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import PokemonCard from '../PokemonCard';
// import SearchBar from '../SearchBar';
// import NavBar from '../NavBar';
// import Filters from '../Filters';
import { LOADING_IMG } from '../../utils';
import './Home.css';


const Home = () => {

    // **************************************************************************************
    // ********************************STATE & CONSTANTS*************************************

    // Información de los pokemons
    const dispatch = useDispatch();
    const allPokemons = useSelector(state => state.pokemons);
  
    // Paginación 
    const [pokemonsPerPage, setPokemonsPerPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);
    // const [pokemonsToShow, setPokemonsToShow] = useState([]); //Se reemplazó x State de Redux
    const [pageNumbers, setPageNumbers] = useState([]);

    // Ordenamiento
    const [order, setOrder] = useState('Descendente'); // Descendente x defecto
    const [orderBy, setOrderBy] = useState('id'); // Ordenado x ID x defecto


    // **************************************************************************************
    // **************************************FUNCTIONS****************************************
    

    // Obtengo los datos del store 

    useEffect(() => {
            dispatch(getPokemons());
    }, [dispatch]);

    // Pagination Handler *******************************************************************

    // const nextPageHandler = () => {
    //     // console.log(currentPage);
    //     if (currentPage < Math.ceil(allPokemons.length / pokemonsPerPage)) {// Calcula el número de páginas totales y verifica que no se pase del límite de páginas
    //         setCurrentPage(currentPage + 1);
    //     }
    // }

    // const prevPageHandler = () => {
    //     // console.log(currentPage);
    //     if (currentPage > 1) { // Verifica que no se pase del límite inferior
    //         setCurrentPage(currentPage - 1);
    //     }
    // }

    // const goToPageHandler = (page) => {
    //     setCurrentPage(page); // Cambia la página actual 
    // }

    

    // Pagination Function *******************************************************************

    // useEffect(() => {
    //     const indexOfLast = currentPage * pokemonsPerPage;
    //     const indexOfFirst = indexOfLast - pokemonsPerPage;
    //     dispatch(setPokemonsToShow(pokemons.slice(indexOfFirst, indexOfLast)));
        
    //     const pageNumbers = []; // Array para guardar los números de páginas
    //     for (let i = 1; i <= Math.ceil(pokemons.length / pokemonsPerPage); i++) { 
    //         pageNumbers.push(i); 
    //     }
    //     setPageNumbers(pageNumbers); // Guarda los números de páginas en el array
    // }, [currentPage, pokemons, dispatch]); // Si cambia la página, se actualiza el array de números de páginas
    
    
    // Ordenamiento y Filtrado ****************************************************************

    // const sortBy = (orderBy) => {
    //     if (order === 'Ascendente') {
    //         dispatch(setPokemonsToShow(pokemonsToShow.sort((a, b) => (a[orderBy] > b[orderBy]) ? 1 : -1)));
    //         setOrder('Descendente')
    //     } else {
    //         dispatch(setPokemonsToShow(pokemonsToShow.sort((a, b) => (a[orderBy] < b[orderBy]) ? 1 : -1)))
    //         setOrder('Ascendente');
    //     }
    //     setOrderBy(orderBy);
    // }

    

    // Render ********************************************************************************

    if (allPokemons.length === 0) {
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
                    {/* <div className='home-header-order'>
                        <select onChange={(e) => sortBy(e.target.value)}>
                            <option value='id'>ID</option>
                            <option value='name'>Name</option>
                            <option value='attack'>Attack</option>
                        </select>
                        <button onClick={() => sortBy(orderBy)}>{order}</button>
                    </div> */}
                </div>
                <div className='home-body'>
                    {pokemonsToShow.map((p) => (
                        // console.log(p.type)
                        <PokemonCard
                            key={p.id}
                            name={p.name}
                            image={p.image}
                            type={p.type}
                            // attack={p.attack}
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
    
    
export default Home;