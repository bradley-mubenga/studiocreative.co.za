import React, { useEffect, useState } from 'react';
//Media Assets
import logo from '../images/logo.png';
//Styles
import '../styles/NavBar.css';
//React Router DOM
import { NavLink } from 'react-router-dom';

export default function NavBar() 
{
    //React state used to show and hide top section of navbar when scrolling.
    const [showNav, setShowNav] = useState(true);
    const displayNavbar = () => {
        if (window.scrollY > 10)
        {
            setShowNav(false);
        }
        else 
        {
            setShowNav(true);
        }
    }
    //Use effect
    useEffect(() => {
        window.addEventListener('scroll', displayNavbar);
        return () => {
            window.removeEventListener('scroll', displayNavbar);
        }
    }, []);

  return (
    <header id='navBar'>
        <div className={ showNav ? 'navContainerTransparent' : 'navContainer' }>
            <div className='navTopSection' >
                <img src={logo} alt='studiocreative.co.za-logo' width={225}/>
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
