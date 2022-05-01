import React from 'react'
import {Link} from 'react-router-dom'
import style from './404.module.css'

const NotFound = () => {
    return (
        <div className={`${style.div}`}>
            <h1 className={`${style.h1}`}>404</h1>
            <h2 className={`${style.h2}`}>Page not found</h2>
            <button className={`${style.button}`}>
                <Link to="/" style={{ textDecoration: 'none' }}>Go to Home</Link>
            </button>
        </div>
    )
}

export default NotFound