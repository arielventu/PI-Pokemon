import React from 'react'
import { LOADING_IMG } from '../../utils'
import style from './Loading.module.css'

const Loading = () => {
  return (
    <div className={`${style.divLoading}`}>
                <img src={LOADING_IMG} alt="loading" width="150" height="150" />
                <h3 className={`${style.loadingText}`} data-text="Loading...">Loading...</h3>
            </div>
  )
}

export default Loading