import React from 'react'

const Pagination = ({allPokemons, pokemonsPerPage, pagination}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <nav key={number}>
                <h1>PAGINACIONNN</h1>
                <li className="page-numbers">
                    <button onClick={() => pagination(number)}>{number}</button>
                </li>
            </nav>
        );

    });
}

export default Pagination