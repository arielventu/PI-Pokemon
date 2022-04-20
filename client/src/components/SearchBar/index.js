import React, { useState } from 'react'


const SearchBar = () => {
  const [search, setSearch] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(search)
  }

  const onChange = (e) => {
    setSearch(e.target.value)
  }
  
  return (
    <div>
      <form onSubmit={onSubmit} >
        <input type="text"  />
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}

export default SearchBar;