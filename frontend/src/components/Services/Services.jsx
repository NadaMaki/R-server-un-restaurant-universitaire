import React, { Component,useRef } from 'react';
import ReactPlayer from "react-player";

import {
    Col,
    Container,
    Row,
    Image
} from 'react-bootstrap';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import ScrollAnimation from 'react-animate-on-scroll';
import './services.css'
//class Services extends Component {
    const Services = () => {



const reactPlayerRef = useRef();

return (
  
    <Container className="main"  fluid>
        <br />
        <br />
        <br/>

        <h6 class="text-align:justify">
       
        Selon la demande, ESPRIT ENTREPRISE est en mesure d'élaborer et de réaliser des formations sur mesure,
        <br/><br/>
         adaptées aux besoins de l’entreprise et en étroite collaboration avec ses représentants, dans les domaines des TIC,
         <br/> <br/>
         du Génie Civil, de l’Electromécanique, de GRH et des langues (Français, Anglais, Allemand, Italien…).
         <br/> <br/>
         <br/> <br/>
         Ces Formations proposées en inter ou en intra entreprise peuvent se présenter sous les 3 formes :
         <br/> <br/>
         * Formations qualifiantes
         <br/> <br/>
         * Formations promotionnelles
         <br/> <br/>
         * Formations Certifiantes
         <br/> <br/>
         Esprit Entreprise centre de certification agréé parPearson Vue, Prométric,ISTQB et autres centres, propose des cursus
         <br/> <br/>
         de formations et de certifications sur les Logiciels des acteurs majeurs de L'informatique : Microsoft, Cisco, Oracle, LPL Apple, etc.
         </h6>

         
    </Container>
)
}

export default Services;
