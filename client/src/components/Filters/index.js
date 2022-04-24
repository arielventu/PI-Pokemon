import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { getTypes } from '../../actions'


const Filters = () => {
  const dispatch = useDispatch()
  const types = useSelector(state => state.types)

  useEffect(() => {
    if (types.length === 0) { // si no están cargados en el store, se cargan
      dispatch(getTypes())
      // console.log(types)
    }
  }, [dispatch])

  return (
    <div>
      <div className='home-filters'>
        <div className='home-filters-types'>
            <select onChange={(e) => filterBy(e.target.value)}>
                <option value='Todos'>Todos</option>
                {types.map(type => (
                    <option key={type.id} value={type.name}>{type.name}</option>
                ))}
            </select>
        </div>
        <div className='home-filters-origin'>
            <select onChange={(e) => filterBy(e.target.value)}>
                <option value='Todos'>Todos</option>
                <option value='PokeAPI'>PokeAPI</option>
                <option value='PokeCreated'>PokeCreated</option>
            </select>
        </div>
    </div>
    </div>
  )
}

export default Filters