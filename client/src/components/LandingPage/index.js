import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { getPokemons } from '../../actions';
import { useDispatch } from 'react-redux';
import style from './LandingPage.module.css';

const LandingPage = () => {

    const dispatch = useDispatch(); // Despacho la action para que se ejecute antes de renderizar el componente CardContainer

    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);

    return (
        <div className={`${style.divLandingPage}`} >
            <div className={`${style.divLandingPage_container}`}>
                <h1 className={`${style.h1Welcome}`} >Welcome to my PI · Henry Pokemon</h1>
                <Link to="/home">
                    <button className={`${style.button}`} >Entrar</button>
                </Link>
            </div>
        </div>
  )
}

export default LandingPage;