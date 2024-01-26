import React, { useRef } from "react";
import ReactPlayer from "react-player";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Icon, InlineIcon } from '@iconify/react';
//import { Link } from 'react-router-dom';
import Slider from "react-animated-slider";

import {
    Col,
    Container,
    Row,
    Image
} from 'react-bootstrap'

import './Video.css'




const Video = () => {

    const reactPlayerRef = useRef();

    return (
      
        <Container className="main"  fluid>
        <MDBContainer className="mt-5 mb-4 text-center text-md-left">
                    <MDBRow className="mt-2">
                      
                        
                        <MDBCol md="3" lg="3" xl="6" className="mb-4 dark-grey-text">
                        <h1 style={{color: 'red'}} >Pourquoi nous choisir ?</h1>
                        
                            <h6  style={{ color: '#9D0208'}} className="font-weight-bold">
                            <InlineIcon icon="mdi:certificate"  width="30" height="30" inline={false} />   Des formations certifiantes et qualifiantes pour améliorer les compétences et les connaissances de nos participants.  </h6>

                          <br/> <br/>

                          <h6  style={{ color: '#6A040F'}} className="font-weight-bold">
                            <InlineIcon icon="mdi:book-multiple-outline"  width="30" height="30" inline={false} />   Notre catalogue de formation est riche et varié, offrant des opportunités pour tous les niveaux d'expérience et de formation.  </h6>

                          <br/> 
                          <br/>

                         <h6  style={{ color: '#D00000'}} className="font-weight-bold">
                        <InlineIcon icon="mdi:home-city-outline"  width="30" height="30" inline={false} />   Nous sommes là pour vous accompagner et vous aider à identifier vos besoins en matière de formation qualifiée, 
                        <br/> en mettant en relation les entreprises qui peuvent bénéficier de vos compétences améliorées.   </h6>

                        </MDBCol>
                        <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
                        <br/> <br/>
                        <br/> <br/>
                      {/* <iframe maxWidth="100%" width="700"  height="300"   position= "relative"  left="80px"
                         src="./demonstration-video.mp4" title="ESPRIT2023" frameborder="0" 
                           allow="autoplay; encrypted-media " 
                       allowfullscreen>
                       </iframe>*/}

    
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

        
        </Container>
    )
}

export default Video
