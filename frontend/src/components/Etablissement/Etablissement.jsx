import React, { useRef } from "react";
import ReactPlayer from "react-player";

import {
    Col,
    Container,
    Row,
    Image
} from 'react-bootstrap'

import './etablissement.css'

const Etablissement = () => {

    const reactPlayerRef = useRef();

    return (
      
        <Container className="main"  fluid>
            <br />
            <br />
            <br/>

            <h6 class="text-align:justify">
           
            ESPRIT ENTREPRISE, filiale Esprit, créée en Janvier 2011 à l’attention des entreprises et de leurs ressources humaines, a pour principales missions de :<br/> <br/>

            * Partager un savoir-faire élevé en matière de formation continue.
            <br/> <br/>
            * Augmenter ou mettre à jour les compétences des ressources humaines de l’entreprise.
            <br/> <br/>
            * Assister les entreprises et les établissements de formation en matière d’ingénierie de formation et d’ingénierie pédagogique.
 <br/> <br/> <br/> <br/>
             </h6>
             
             <iframe maxWidth="100%" width="700"  height="300"   position= "relative"  left="80px"
             src="https://www.youtube.com/embed/EVQS0RQqT1I?autoplay=1&mute=1" title="ESPRIT2023" frameborder="0" 
             allow="autoplay; encrypted-media " 
             allowfullscreen>
             </iframe>

            
        </Container>
    )
}

export default Etablissement
