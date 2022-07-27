import React from 'react';
//CSS
import '../../styles/about/Clients.css';
//URL Endpoints
import { ClientsImg } from '../../data/imagekit';

export default function Clients() {
  return (
    <section id='clientsSection' className='clientsSection'>
        <div>
            <p>Recommended by our clients.</p>
        </div>
        <div className='clientsContainer'>
            {
                ClientsImg.map((source, index) => {
                    return (
                        <div className='clientLogoDiv' key={index}>
                            <img src={source} alt="client's logo" width={"150px"} className="clientLogoImg"/>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}
