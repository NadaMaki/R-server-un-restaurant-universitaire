  

 import React, { Component , } from 'react';
 import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import Icofont from 'react-icofont';

import { NavLink } from "react-router-dom";
//import { Link } from "react-scroll";

import { Link } from 'react-router-dom';

import { LinkContainer ,NavItem } from "react-router-bootstrap";
import { Navbar, Container, Nav ,NavDropdown,Image,Form} from "react-bootstrap";
import SearchModal from "./SearchModal";
import { logout } from './../../actions/userActions';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './Header.css'; 


const Header = () => {

    



    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    const   componentDidMount= () => {
        let elem = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elem.classList.add("menu-shrink");
                elem.classList.add("fixed-top");
            } else {
                elem.classList.remove("menu-shrink");
                elem.classList.remove("fixed-top");
            }
        });
        window.scrollTo(0, 0);
        
    
    }

    const  closeNavbar= () => {
        if (window.matchMedia("screen and (max-width: 991px)").matches) {
            document.getElementById("collaspe-btn").click();
        }
    }
  



    return (
        <React.Fragment>
            {/* Start Top Header */}
           {/*    <div className="top-header ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg-7">
                            <div className="address-bar">
                               
                                  <i class="fa fa-envelope " style={{color: 'red'}}/> resto@esprit.tnnnnn  </div>

                                  <div className="address-bar">

                            <i class="fa fa-phone  "style={{color: 'red'}} /> +(216) 70 250 000 (poste 306)        
                            </div>
                        </div>
                        
                        <div className="col-lg-5 col-md-5">
                            <div className="social-icons">
                                <ul className="list-inline   ">


                 <li><a href="https://www.facebook.com/profile.php?id=100091609836745" rel="noopener noreferrer" target="_blank"><i class="fab fa-facebook  fa-fw "style={{color: 'red'}}/></a></li>

                   <li> <a href=""  rel="noopener noreferrer" target="_blank">
                    <i class="fab fa-linkedin-in  fa-fw "style={{color: 'red'}}/></a></li>

                    <li><a href="" rel="noopener noreferrer" target="_blank">
                     <i class="fab fa-tiktok fa-fw "style={{color: 'red'}}  /></a></li> */}


                   
                   {/* <li><a href="-" rel="noopener noreferrer" target="_blank">
                     <i className="fab fab fa-youtube   fa-fw" style={{color: 'red'}} i/>  </a></li>
                   <li><a href="-" rel="noopener noreferrer" target="_blank"><i class="fab fa-twitter text-success fa-fw"/></a></li>
                   <li><a href="-" rel="noopener noreferrer" target="_blank"><i class="fab fa-instagram text-success fa-fw"/></a></li>
                   

                                </ul>

                            </div>
                      <div className="header-search" >
                        <SearchModal />
                         </div>
                         
                        </div>
                    </div>

                  
                </div>
                
            </div> */}
            {/* End Top Header */}

            <Navbar
                id="navbar"
                bg="light"
                expand="xxl" 
                className="navbar navbar-expand-md navbar-light  "
                collapseOnSelect
            >
                     <LinkContainer to="/">
                
                <Navbar.Brand className="nav-cal" >
                    <Image width="80px"src="/logo-final.png" />
                </Navbar.Brand>


            </LinkContainer>
                <Container >
                   

                    <Navbar.Toggle 
                        className="navbar-toggler" 
                        type="button" data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation" 
                        id="collaspe-btn"
                    />
                    <Navbar.Collapse id="navbarSupportedContent" >
             
             <Nav class="navbar navbar-expand-sm bg-light navbar-light" id="navbarleft" > 
      
           

                    <LinkContainer style={{color: 'black'}} to="/">
                    <Nav.Link >Accueil</Nav.Link>
                    </LinkContainer>
                    
          

                    {
                        userInfo ? (
                            <NavDropdown id="navDropdown"  title={userInfo.name.toUpperCase() } >
                                {
                                    userInfo && userInfo.isAdmin && (
                                        <LinkContainer to="/admin/dashboard">
                                            <NavDropdown.Item > Tableau de bord </NavDropdown.Item>
                                        </LinkContainer>
                                    )
                                }
                            
                                {
                                    userInfo && userInfo.isAdmin || (
                                <LinkContainer as={Link} to="/reservation">
                                    <NavDropdown.Item > Reservation  </NavDropdown.Item>
                                </LinkContainer>

                                   )
                                }


                                <LinkContainer to="/profile">
                                    <NavDropdown.Item > Profil  </NavDropdown.Item>
                                </LinkContainer>


                                <LinkContainer to="/login">
                                    <NavDropdown.Item    onClick={logoutHandler}> Déconnexion </NavDropdown.Item>
                                </LinkContainer>

                            </NavDropdown>
                        ) : (

                    <LinkContainer to="/login" >
                    <BottomNavigationAction color="disabled" 
                                            icon=  {  < AccountCircleIcon /> }  
                                            label="login"   
                                            title="special registration"   >
                    </BottomNavigationAction>
                    </LinkContainer>            
            

                            )
                    }
                 
    
            
                        </Nav>
                    </Navbar.Collapse>
                    




                </Container>
            </Navbar>
        </React.Fragment>
    );
  
}


export default Header;
