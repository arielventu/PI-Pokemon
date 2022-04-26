import React from 'react'

const Pagination = ({allPokemons, pokemonsPerPage, pagination}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
    <nav key={number}>
        <h1>PAGINACIONNN</h1>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => pagination(number)} className="page-link">{number}</a>
                    </li>
                ))}
        </ul>
    </nav>
    );

}

export default Pagination