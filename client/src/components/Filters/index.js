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
    <div>Filters</div>
  )
}

export default Filters