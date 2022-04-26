import React from 'react'

const Pagination = ({allPokemons, pokemonsPerPage, pagination}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allPokemons.length / pokemonsPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <li
                key={number}
                id={number}
                onClick={pagination}
            >
                {number}
            </li>
        );

    });
    
        
//     return (
//     <div>Pagination</div>
//   )
}

export default Pagination