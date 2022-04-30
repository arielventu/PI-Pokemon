import React from 'react'
import {Link} from 'react-router-dom'
import SearchBar from '../SearchBar';
import style from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={`${style.nav}`}>
      <div className={`${style.leftLink}`}>
        <Link to="/home" className={`${style.link}`}>
          <h1 className={`${style.pHP}`}>Henry Pokemon</h1>
        </Link>
      </div>
      <div className={`${style.search}`}>
        <SearchBar />
      </div>
      <div className={`${style.rightLink}`}>
        <Link to='/create' className={`${style.link}`}>
          <h1 className={`${style.pCP}`} >Create Pokemon</h1>
        </Link>
      </div>
    </nav>
    )
  }

export default NavBar;