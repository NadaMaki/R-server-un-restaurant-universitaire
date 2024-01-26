import React, { useRef } from "react";
import ReactPlayer from "react-player";

import {
    Col,
    Container,
    Row,
    Image
} from 'react-bootstrap'

import './plateforme.css'

const Plateforme = () => {

    const reactPlayerRef = useRef();

    return (
      
        <Container className="main"  fluid>
            <br />
            <br />
            <br/>

            <h6 class="text-align:justify">
           
            Ceci est une vidéo explicative sur la plateforme
            <br/>
            <br/>

            Un petit récapitulatif de la partie qui a été développée
            <br/> 
            <br/> 
            Attendez le reste des parties
             </h6>
             <br/> 
            <br/> 
             <iframe maxWidth="100%" width="700"  height="300"   position= "relative"  left="80px"
             src="./sifa.mp4 " title="ESPRIT2023" frameborder="0" 
             allow="autoplay; encrypted-media " 
             allowfullscreen>
             </iframe>

            
        </Container>
    )
}

export default Plateforme
