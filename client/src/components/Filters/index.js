import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { getTypes, filterTypes} from '../../actions'


const Filters = () => {
  const dispatch = useDispatch()
  const types = useSelector(state => state.types)
  const typesFilter = useSelector(state => state.typesFilter)

  useEffect(() => {
      dispatch(getTypes())
  }, [dispatch])

  const handleChange = (e) => {
    dispatch(filterTypes(e.target.value))
    console.log(typesFilter)
  }

   
  return (
    <div className="filters">
      <h3>Filters</h3>
      <div className="filters__types">
        <h4>Types</h4>
        <select onChange={handleChange}>
          <option value="">All</option>
          {types.map((type) => (
            <option key={type.id} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
    </div>

    
  )
}

export default Filters