import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPokemons, getTypes } from '../../actions';
import { useSelector, useDispatch } from 'react-redux'
import style from './NotFound.module.css'



const NotFound = () => {

    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons);

    useEffect(() => {
        allPokemons.length === 0 && dispatch(getPokemons());
        dispatch(getTypes());
    }, [allPokemons.length]);

    return (
        <div className={`${style.div}`}>
            <h1 className={`${style.h1}`}>404</h1>
            <h2 className={`${style.h2}`}>Page not found</h2>
            <Link to="/home" style={{ textDecoration: 'none' }}>
                <button className={`${style.button}`}>Go to Home</button>
            </Link>
        </div>
    )
}

export default NotFound