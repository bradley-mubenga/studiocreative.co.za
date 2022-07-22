import React from 'react';
//Components

//CSS
import '../styles/Hero.css';
//Media Assets
import backgroundVideo from '../videos/bgVid.mp4';
//React Icons
import { IconContext } from 'react-icons';
import { BsChevronDown } from 'react-icons/bs';

export default function Hero() {
  return (
    <section className='heroSection'>
        <video src={backgroundVideo} autoPlay loop muted/>
        <div className='heroText'>
            <h1>Video Makes A Difference</h1>
            <p>From concept to completion we effectively produce captivating video content.</p>
        </div>
        <div className='mouseIconContainer'>
            <IconContext.Provider value={{ color: "#B8BCB3", className: "global-class-name", size: "3em" }}>
                <div>
                    <BsChevronDown />
                </div>
            </IconContext.Provider>
        </div>
    </section>
  )
}
