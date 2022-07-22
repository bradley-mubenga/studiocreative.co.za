import React from 'react';
//CSS
import '../../styles/about/Clients.css';
//Media Assets
import quiverLogo from "../../images/quiver-logo.png";
import freedomChurchLogo from "../../images/freedom-church-logo.png";
import vivaGymLogo from '../../images/viva-gym-logo.png';

export default function Clients() {
    //PUT IMAGES IN AN ARRAY AND LOOP THROUGH AND MAKE A LOGO JSX FOR EACH
    let Images = [ quiverLogo, freedomChurchLogo, vivaGymLogo ]
  return (
    <section id='clientsSection' className='clientsSection'>
        <div>
            <p>Recommended by our clients.</p>
        </div>
        <div className='clientsContainer'>
            {
                Images.map((source, index) => {
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
