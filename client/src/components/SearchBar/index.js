import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getPokemonByName } from '../../actions';
import style from './SearchBar.module.css';

const SearchBar = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch();

  
  const handleInputChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
    console.log(name)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getPokemonByName(name));
    console.log(object);
  }

  return (
    <div>
      <form className={`${style.form}`} onSubmit={handleSubmit} >
        <input className={`${style.input}`} type="text" onChange={(e) => handleInputChange(e)} value={name}/>
        <NavLink to={`/pokemon/search/${name}`}><input className={`${style.button}`} type="submit" value="Search" /></NavLink>
        {/* <NavLink to={`/pokemon/search/${search}`}><button>Search</button></NavLink> */}
        {/* <input type="submit" value="Search" /> */}
      </form>
    </div>
  )
}

export default SearchBar;