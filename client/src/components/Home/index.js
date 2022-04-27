import React, { useState, useEffect } from 'react';
import { getPokemons } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PokemonCard from '../PokemonCard';
import Pagination from '../Pagination';
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
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(4);
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
    // const [pageNumbers, setPageNumbers] = useState([]);

    // Ordenamiento
    // const [order, setOrder] = useState('Descendente'); // Descendente x defecto
    // const [orderBy, setOrderBy] = useState('id'); // Ordenado x ID x defecto


    // **************************************************************************************
    // **************************************FUNCTIONS****************************************
    
    // Función para cambiar la página
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Función para cambiar el orden
    // const handleOrder = (order) => {
    //     setOrder(order);
    // };

    // Función para cambiar el orden
    // const handleOrderBy = (orderBy) => {
    //     setOrderBy(orderBy);
    // };


    // Obtengo los datos del store 

    useEffect(() => {
            dispatch(getPokemons());
    }, [dispatch]);

    

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
                    <h1>Pokemons</h1>
                   
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
                    <Pagination 
                        pokemonsPerPage={pokemonsPerPage}
                        allPokemons={allPokemons.length}
                        pagination={pagination}
                        // nextPageHandler={nextPageHandler}
                        // prevPageHandler={prevPageHandler}
                        // goToPageHandler={goToPageHandler}
                        // pageNumbers={pageNumbers}
                        />
                    </div>

                </div>
            )
            
        }
    }
    
    
export default Home;