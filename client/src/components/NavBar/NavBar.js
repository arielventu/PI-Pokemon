import React from 'react';
import { NavLink } from 'react-router-dom';
import Buscador from '../Buscador/Buscador';
import Logo from '../../logoHenry.png'

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
           <div>
          <NavLink exact to="/home" >
                <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            </NavLink>    
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >Home</NavLink>
                        <NavLink to="/filter/posts" >Posts</NavLink> 
                    </li>
                    <li className="list-item">
                       
                    </li>
                </ul>
          </nav>
        </header>
    )
}