import React, { useEffect, useState } from 'react';
//Styles
import '../styles/NavBar.css';
//React Router DOM
import { NavLink } from 'react-router-dom';
//React Icons
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoExitSharp } from 'react-icons/io5';
//Animate.css
import 'animate.css';
import { logoImg } from '../data/imagekit';

export default function NavBar() 
{
    //React state used to manipulate transparency of navbar when scrolling.
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
    
    //Responsive Menu Toggle Event Listener
    const [showResponsiveMenu, setResponsiveMenu] = useState(false);
    function navToggleShow(e)
    {
        e.preventDefault()
        setResponsiveMenu(true)
    }
    function navToggleHide(e)
    {
        setResponsiveMenu(false)
    }

  return (
    <header id='navBar'>
        <div className={ showNav ? 'navContainerTransparent' : 'navContainer' }>
            <div className='navLeftSection' >
                <img src={logoImg} alt='studiocreative.co.za-logo' className="navLogo"/>
            </div>

            <div className='navRightSection'> 
                <div className='navListWrapper'>
                    <ul className='navList'>
                        <li>
                            <NavLink to="/">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio">Our Work</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            {/*RESPONSIVE NAVIGATION*/}
            <div className={showResponsiveMenu ? 'navResponsive navResponsiveVisible' : 'navResponsive'}>
                <div className='navResponsiveListWrapper'>
                    <ul className='navResponsiveList'>
                        <li>
                            <NavLink to="/" onClick={navToggleHide}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio" onClick={navToggleHide}>Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={navToggleHide}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className='navResponsiveRightSection'>
                <IconContext.Provider 
                    value=
                    {
                        { 
                            color: "#B8BCB3", 
                            size: 30, 
                            className: showResponsiveMenu ? "navHamburger hide" : "navHamburger", 
                            attr: "hamburger menu icon" 
                        }
                    }
                >
                    <div onClick={navToggleShow}>
                        <GiHamburgerMenu />
                    </div>
                </IconContext.Provider>
                
                <div className='navExitWrapper'>
                    <IconContext.Provider 
                        value=
                        {
                            { 
                                color: "#B8BCB3", 
                                size: 30, 
                                className: showResponsiveMenu ? "navExitMenu animate__animated animate__slideInRight" : "navExitMenu hide", 
                                attr: "exit menu icon" 
                            }
                        }
                    >
                        <div onClick={navToggleHide}>
                            <IoExitSharp/>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    </header>
  )
}
