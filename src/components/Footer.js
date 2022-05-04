import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="contain-agence">
                <h3>Agence(2062) USA</h3>
                <p>Spécialité <strong>Neptune</strong></p>
            </div>
            <div className="contain-agence">
                <h3>Agence(2062) Suisse</h3>
                <p>Spécialité <strong>Venus</strong></p>
            </div>
            <div className="contain-agence">
                <h3>Agence(2062) Japon</h3>
                <p>Spécialité <strong>Venus</strong></p>
            </div>
            <p>Pour nous suivre partout dans la galaxie et au delà :</p>
            <div className="logo">
            <img src="https://img.icons8.com/color/48/000000/hal-9000.png" alt="jarvis"/>
            <img src="https://img.icons8.com/color/48/000000/hologram.png" alt="hologramme"/>
            <img src="./assets/icons8-neural-connections-96.png" alt="puce_neurone"/>
            <img src="https://img.icons8.com/color/48/000000/bmo.png" alt="bango"/>
            <img src="https://img.icons8.com/color/48/000000/apple-watch-apps.png" alt="watch"/>
            </div>
            <p>© Copyright 2062. Tous droits réservés.</p>
            <p>Termes et conditions</p>
        </>
    );
};

export default Footer;