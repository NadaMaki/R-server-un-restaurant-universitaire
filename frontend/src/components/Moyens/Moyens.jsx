import React, { useRef } from "react";
import ReactPlayer from "react-player";

import {
    Col,
    Container,
    Row,
    Image
} from 'react-bootstrap'

import './moyens.css'

const Moyens = () => {

    const reactPlayerRef = useRef();

    return (
      
        <Container className="main"  fluid>
            <br />
            <br />
            <br/>
             
             <h1>Nos Moyens</h1>
          
             <br />
             <br />

             <p>ESPRIT ENTREPRISES met à la disposition des entreprises&nbsp;:</p>
             <ol>
                <li style={{ color: '#e60000'}}>
                  Ses experts en ingénierie de formation pour l'élaboration de parcours de formation et ses 300
                  enseignants 
                  <br />
                  et formateurs pour la réalisation de ces parcours dans les différents domaines
                  technologiques et linguistiques.
                </li>
            <br />
          
                <li style={{ color: '#810000'}}>Ses deux (2) grands sites de formation équipés par :</li>
              </ol>
              <ul className="qualite-ul">
                <li>Des Plateformes avancées et des ateliers technologiques pour la formation et la RDI</li>
                <li>Des liaisons Internet haut-débit et réseau Wifi</li>
                <li>D’un Centre de langues</li>
                <li>D’un Centre d’innovation pédagogique</li>
                <li>Des Espaces pour l’hébergement et la restauration.</li>
              </ul>

            
        </Container>
    )
}

export default Moyens
