import React, { useState } from 'react';
import axios from 'axios';


const SearchBar = () => {
  const [search, setSearch] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(search)
    axios.get()
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