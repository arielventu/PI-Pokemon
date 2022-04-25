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
    
    // <div>
    //   <div className='home-filters'>
    //     <div className='home-filters-types'>
    //         <select onChange={(e) => handleChange(e.target.value)}>
    //         {/* <select> */}
    //             <option value='All'>All</option>
    //             {types.map(type => (
    //                 <option key={type.id} value={type.name}>{type.name}</option>
    //             ))}
    //         </select>
    //     </div>
    //     <div className='home-filters-origin'>
    //         <select>
    //         {/* <select onChange={(e) => filterBy(e.target.value)}> */}
    //             <option value='All'>All</option>
    //             <option value='PokeAPI'>PokeAPI</option>
    //             <option value='Created'>Created</option>
    //         </select>
    //     </div>
    // </div>
    // </div>
  )
}

export default Filters