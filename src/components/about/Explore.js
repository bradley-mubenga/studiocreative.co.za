import React from 'react';
//Components
import Button from '../Buttons';
//CSS
import '../../styles/about/Explore.css';
//Media Assets
import sunLogoEmblem from '../../images/logo-sun-emblem.png'

export default function Explore() {
  return (
    <section id='exploreSection' className='container'>
        <div className='exploreContainer'>
            <div className='exploreWrapper'>
                <div className='exploreEmblem'>
                    <img src={sunLogoEmblem} alt="sun emblem of studio creative" width={"77px"}/>
                </div>
                <div className='exploreText'>
                    <h2>We Bring Your Ideas To Life</h2>
                    <p>Short films give us the freedom to explore conceptual ideas and permits us to express ourselves as creatives. While building some superb brands and businesses in the process.</p>
                    <div className='exploreButtonWrapper'>
                        <Button text={"Explore Our Work"} href={"/portfolio"} type="outlineGreen"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
