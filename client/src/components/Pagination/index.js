import React from 'react'
import style from './Pagination.module.css' 

export default function Pagination ({allPokemons, pokemonsPerPage, pagination, currentPage}) {
    const pageNumbers = [];
    // console.log(currentPage);

    for (let i = 1; i <= Math.ceil(allPokemons/pokemonsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
    <nav className={`${style.nav}`}>
            <div className={`${style.divPagination}`}>
                {currentPage > 1 && <button className={`${style.pageItem} ${style.num}`} onClick={() => pagination(currentPage - 1)}>
                    &lt;
                </button>}
            {pageNumbers && pageNumbers.map(number => (
                <button onClick={() => pagination(number)} className={ number === currentPage ? `${style.current} ${style.num}` : `${style.pageItem} ${style.num}`} key={number}>
                    {number}
                </button>
            ))}
                {currentPage === pageNumbers.length ?
                    <button className={`${style.pageItem} ${style.num}`} disabled>&gt;</button>
                    : currentPage <= pageNumbers.length - 1 && <button className={`${style.pageItem} ${style.num}`} onClick={() => pagination(currentPage + 1)}>&gt;</button>}
        </div>
    </nav>
    )
}
