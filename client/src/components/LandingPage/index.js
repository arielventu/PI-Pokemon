import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { getPokemons } from '../../actions';
import { useDispatch } from 'react-redux';

const LandingPage = () => {

    const dispatch = useDispatch(); // Despacho la action para que se ejecute antes de renderizar el componente CardContainer
    useEffect(() => {
        if (pokemons.length === 0) { // si no están cargados en el store, se cargan
            dispatch(getPokemons());
        }
    }, [dispatch]);

    return (
        <div>
            <h1>Landing Page</h1>
            <Link to="/home">
                <button>Entrar</button>
            </Link>
        </div>
  )
}

export default LandingPage;