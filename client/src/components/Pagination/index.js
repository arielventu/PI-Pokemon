import React from 'react'
import style from './Pagination.module.css' 

export default function Pagination ({allPokemons, pokemonsPerPage, pagination}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allPokemons/pokemonsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
    <nav>
        <ul className={`${style.ulPagination}`}>
            {pageNumbers && pageNumbers.map(number => (
                <li className={`${style.pageItem}`} key={number}>
                    <a onClick={() => pagination(number)} className={`${style.num}`}>{number}</a>
                </li>
            ))}
        </ul>
    </nav>
    )
}
