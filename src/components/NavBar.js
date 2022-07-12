import React from 'react';
//Media Assets
import logo from '../images/logo.png';
//Styles
import '../styles/NavBar.css';

export default function NavBar() {
  return (
    <header>
        <div className='navContainer'>
            <div className='navTopSection'>
                <img src={logo} alt='studiocreative.co.za-logo' width={400}/>
            </div>

            <div className='navBottomSection'>
                <div className='navListWrapper'>
                    <ul className='navList'>
                        <li>About</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}
