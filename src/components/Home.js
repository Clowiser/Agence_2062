import React from 'react';
import billg from "../style/staff/bill-gates.png"
import billc from "../style/staff/bill-cipher.png"
import bender from "../style/staff/bender.png"
import buzz from "../style/staff/buzz-lightyear.png"
import rick from "../style/staff/rick.png"
import bob from "../style/staff/spongebob.png"
import fond from "../style/assets/fond.PNG"
import '../style/Home.css';

const backgroundImg = {
    backgroundImage: `url(${fond})`
}

const Home = () =>{
    return(
        <div>
            <div
                 style={backgroundImg}
            className="bg">
                <h1>L'espace, votre future adresse</h1>
            </div>

            <p>L'expertise spatiale de toute notre équipe à votre service !</p>

            <div className="d-flex justify-content-center flex-wrap">
            <img src={billg} alt='Bill Gates'/>
            <img src={billc} alt='Bill Gates'/>
            <img src={bender} alt='Bill Gates'/>
            <img src={buzz} alt='Bill Gates'/>
            <img src={rick} alt='Bill Gates'/>
            <img src={bob} alt='Bill Gates'/>
            </div>

            <p>A propos de l'Agence (2062)</p>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
        </div>
    )
}

export default Home;