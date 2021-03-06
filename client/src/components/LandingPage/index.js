import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { getPokemons } from '../../actions';
import { useDispatch } from 'react-redux';
import style from './LandingPage.module.css';

const LandingPage = () => {

    const dispatch = useDispatch(); 

    // useEffect(() => {
    //     dispatch(getPokemons()); // Despacho la action para que se ejecute antes de renderizar el componente CardContainer
    // }, [dispatch]);

    useEffect(() => {
        document.body.style.overflow = "hidden";
    }, []);

    return (
        <div className={`${style.divLandingPage}`} >
            <div className={`${style.divLandingPage_container}`}>
                <h1 className={`${style.h1Welcome}`} >Welcome to Pokemon App</h1>
                <Link to="/home">
                    <button className={`${style.button}`} >Enter</button>
                </Link>
            </div>
        </div>
  )
}

export default LandingPage;