import React, { useRef , useState ,useEffect }  from "react";

import { Document, Page, pdfjs } from 'react-pdf';

import ReactPlayer from "react-player";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Icon, InlineIcon } from '@iconify/react';
//import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import { useHistory } from 'react-router-dom';


import {
    Col,
    Container,
    Row,
    Image
} from 'react-bootstrap'

import './catalog.css'

import { listCatalogs } from '../../actions/catalogActions'


import { ReactReader, ReactReaderStyle } from "react-reader";

import  {useDispatch, useSelector} from 'react-redux'



import Message from '../Message/Message' 
import Loader from '../Loader/Loader' ;




// This will ensure PDF.js is properly loaded for worker support
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Catalog = ({  history }) => { 

const dispatch = useDispatch(); // Initialize dispatch hook

const catalogList = useSelector(state => state.catalogList)
const { loading, error, catalogs } = catalogList

const catalogRegister = useSelector(state => state.catalogRegister)
const { catalogInfo } = catalogRegister



///useEffect(() => {
///  (catalogInfo) && dispatch(listCatalogs())
///  }, [dispatch, history, catalogInfo])


useEffect(() => {
  // Fetch catalogs if catalogInfo is present
  if (catalogInfo) {
    dispatch(listCatalogs());
  }
}, [dispatch, history, catalogInfo]);





//epubjs

//const reactPlayerRef = useRef();
//
//  // And your own state logic to persist state
//  const [location, setLocation] = useState(null)
//  const locationChanged = epubcifi => {
//    setLocation(epubcifi)
//  }
//

    return (
      
        <Container className="main"  fluid>
        <MDBContainer >
    
 
            <section id="blog" className="our-blog ptb-100 main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="section-title">

                    <h1 style={{color: 'red'}}  >   Catalogues repas  </h1>
                           <p> Consultez notre catalogue pour découvrir tous les repas quotidiens et réserver votre repas</p>
                                </div>

                            </ScrollAnimation>
                        </div>
                    </div>

                  
                </div>
            </section>   
     



                    {loading ? <Loader />
                    : error ? <Message variant='danger'>{error}</Message>
                        : (
          
            catalogs.map(catalog => (

                    <div key={catalog._id}  style={{ justifyContent: 'center' }}  className="col-lg-12 text-center">
                                   
                                   <br />
                                   <br />

                        <Image
                            style={{ width: 500, height: 700 , justifyContent: 'center'  }}

                            src={`/epubs/${catalog.link}`}
                               
                             />
<br />
                        <a style={{color: 'red'}}  href={`/epubs/${catalog.link}`} download>  Télécharger le catalogue </a>


                        </div>


                    
                        
                                              ))

                       )}






                </MDBContainer>

        
        </Container>
    )
}

export default  Catalog


