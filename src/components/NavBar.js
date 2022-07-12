import React from 'react';
//Media Assets
import logo from '../images/logo.png';
//Styles
import '../styles/NavBar.css';
//React Router DOM
import { NavLink } from 'react-router-dom';

export default function NavBar() 
{
  return (
    <header>
        <div className='navContainer'>
            <div className='navTopSection'>
                <img src={logo} alt='studiocreative.co.za-logo' width={400}/>
            </div>

            <div className='navBottomSection'>
                <div className='navListWrapper'>
                    <ul className='navList'>
                        <li>
                            <NavLink to="/">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio">Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}
