
import React, { useState,useRef } from "react";
import {  BrowserRouter } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Form, Button } from 'react-bootstrap'
import { send } from 'emailjs-com';


import emailjs from "@emailjs/browser";


import './Footer.css'

export const Footer = () => {

 //   const form = useRef();
//
const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });
 

       const sendEmail = (e) => {
        alert('Merci pour votre message, il sera traité au plus vite ; Bienvenue');

            e.preventDefault();
 
            send("service_d7yjq4g","template_t8eykdf", toSend,"myW4ZsS5iVBWmLU_C")
             
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

 const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };



    return (
        <BrowserRouter>
            <MDBFooter color="blue-grey" className="page-footer font-small lighten-5 pt-0">
            <div
      style={{
        backgroundColor: 'red',
        
      }}
    >
                    <MDBContainer>
                        <MDBRow className="py-4 d-flex align-items-center">
                            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                                
                            </MDBCol>
                            <MDBCol md="6" lg="7" className="text-center text-md-right">
                                
                           {/*       <a href="https://www.facebook.com/profile.php?id=100091609836745" className="fb-ic ml-0">
                            <i class="fab fab fa-facebook  white-text mr-lg-4  "/> </a>


                            <a href="https://www.linkedin.com/in/esprit-entreprise-21a7a4a2/" className="fb-ic ml-0">
                            <i class="fab fa-linkedin-in  white-text mr-lg-4 "></i> </a>

                            <a href="https://www.tiktok.com/@espritentreprise" className="fb-ic ml-0">
                            <i class="fab fa-tiktok white-text mr-lg-4 fa-fw"/></a> */}

               {/*

                 <a href="-" className="fb-ic ml-0">
                     <i className="fab fab fa-youtube white-text mr-lg-4"> </i>  </a>

                  <a href="-" className="fb-ic ml-0">
                      <i class="fab fa-twitter white-text mr-lg-4 fa-fw"/>    </a>

                   <a href="-" className="fb-ic ml-0">
                       <i class="fab fa-instagram white-text mr-lg-4 fa-fw"/></a>
                 */}
                 
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
                <MDBContainer className="mt-5 mb-4 text-center text-md-left">
                    <MDBRow className="mt-3">
                        <MDBCol md="3" lg="3    " xl="3" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong></strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                     
                        </MDBCol>
                        
                        <MDBCol md="3" lg="3" xl="6" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold">
                                
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                           
                            <p><i className="fa fa-envelope mr-3 "  style={{color: 'red'}} /> resto@esprit.tn </p>
                            <p><i className="fa fa-phone mr-3 " style={{color: 'red'}} />Tél.:+(216) 70 250 000 (poste 306)</p>
                        
                        </MDBCol>
                    
                        
                        <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Contactez nous</strong>
                            </h6>
                            
                            <Form  onSubmit={sendEmail}>

                                <Form.Group >
                                    <Form.Label>Nom</Form.Label>
                                    <Form.Control name="from_name"  type="text"  value={toSend.from_name}  onChange={handleChange} placeholder="Nom" />
                                </Form.Group>
                            

                                <Form.Group >
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control name="reply_to" type="email"    placeholder="e-mail"  value={toSend.reply_to}    onChange={handleChange}/>
                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control name="message" as="textarea" rows={3} type="text" placeholder="message"  value={toSend.message}   onChange={handleChange}/>
                                </Form.Group>
                                <Button  style={{ backgroundColor: 'red' }} type="submit">Envoyer</Button>
                            </Form>
                        </MDBCol>


                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright:{" "}
                        Esprit
                </MDBContainer>
                </div>
            </MDBFooter>
        </BrowserRouter>
    )
}

export default Footer
