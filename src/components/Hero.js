import React from 'react';
//Components
import Button from './Button';
//CSS
import '../styles/Hero.css';
//Media Assets
import backgroundVideo from '../videos/bgVid.mp4';
import mouseIcon from '../images/mouseIcon.png';
import { Link } from 'react-router-dom';
//
export default function Hero() {
  return (
    <section className='heroSection'>
        <video src={backgroundVideo} autoPlay loop muted/>
        <div className='heroText'>
            <h1>Videography Made Simple</h1>
            <p>We make hard things simple for you.</p>
            <div>
                <Button text="Learn More" href="/brad" type="outlineGrey"/>
            </div>
        </div>
        <div className='mouseIconContainer'>
            <Link to="#porfolio">
                <img src={mouseIcon} alt="mouse-scroll-icon" width="45vw" />
            </Link>
        </div>
    </section>
  )
}
