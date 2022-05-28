import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getPokemonByName } from '../../actions';
import style from './SearchBar.module.css';

const SearchBar = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch();

  
  const handleInputChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getPokemonByName(name));
  }
  
  return (
    <div>
      <form className={`${style.form}`} onSubmit={handleSubmit} >
        <input className={`${style.input}`} type="text" onChange={(e) => handleInputChange(e)} value={name} placeholder='Insert Pokemon name here' />
        <NavLink to={`/pokemon/search/${name}`}>
          <input className={`${style.button}`} type="submit" value="Search" onClick={() => { setName('') }} />
        </NavLink>
      </form>
    </div>
  )
}

export default SearchBar;