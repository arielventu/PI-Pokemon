import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import searchPokemons from '../actions/searchPokemons';

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(searchPokemons(search));
  }

  const onChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <form onSubmit={onSubmit} >
        <input type="text" onChange={onChange} value={ search }/>
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}

export default SearchBar;