import React, { useState } from 'react'


const SearchBar = () => {
  const [search, setSearch] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(search)
  }
  
  return (
    <div>
      <form onSubmit={onSubmit} >
        <input type="text" />
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}

export default SearchBar;