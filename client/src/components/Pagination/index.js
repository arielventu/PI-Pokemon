import React from 'react'
import style from './Pagination.module.css' 

export default function Pagination ({allPokemons, pokemonsPerPage, pagination}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allPokemons/pokemonsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
    <nav className={`${style.nav}`}>
        <ul className={`${style.ulPagination}`}>
            {pageNumbers && pageNumbers.map(number => (
                <li onClick={() => pagination(number)} className={`${style.pageItem}`} key={number}>
                    <a  className={`${style.num}`}>{number}</a>
                </li>
            ))}
        </ul>
    </nav>
    )
}
