import React from 'react'
import {Link} from 'react-router-dom'
import style from './NotFound.module.css'

const PokeNotFound = () => {
    return (
        <div className={`${style.div}`}>
            <h1 className={`${style.h1}`}>POKEMON</h1>
            <h2 className={`${style.h2}`}>Page not found</h2>
            <Link to="/home" style={{ textDecoration: 'none' }}>
                <button className={`${style.button}`}>Go to Home</button>
            </Link>
        </div>
    )
}

export default PokeNotFound