import React from 'react';
//CSS
import '../../styles/about/Hero.css';
//React Icons
import { IconContext } from 'react-icons';
import { BsChevronDown } from 'react-icons/bs';
//Media Assets
const backgroundVideo = 'https://ik.imagekit.io/78n76p2wnul/studiocreative/bgVid_z7dw5bwtM.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1658933891741';

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
