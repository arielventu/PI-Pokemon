import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { getTypes, filterTypes, setPokemonsToShow} from '../../actions'


const Filters = () => {
  const dispatch = useDispatch()
  const types = useSelector(state => state.types)
  const typesFilter = useSelector(state => state.typesFilter)

  useEffect(() => {
      dispatch(getTypes())
  }, [dispatch])

  const filterTypesHandler = (type) => {
    dispatch(filterTypes(type))
  }

      


   
  return (
    <div className="filters">
      <h2>Filters</h2>
      <div className="div-types">
        {types && types.map((el, i) => (
          <div key={i} className="div-type">
            <button
              key={i}
              className={`button-type ${typesFilter.includes(el) ? 'selected' : ''}`}
              onClick={() => filterTypesHandler(el)}
            >
              {el}
            </button>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Filters