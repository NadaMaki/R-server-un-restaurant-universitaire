
### ES Modules in Node

Used ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'MYJWT_SECRET'

```
Create a .env file inside frontend and add the following

```
REACT_APP_GOOGLE_KEY = "add google map api key"
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5244)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

###  Database


```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```
/////////pdf 

// import { Document, Page, pdfjs } from 'react-pdf';

// This will ensure PDF.js is properly loaded for worker support
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

                        <h1>PDF Viewer data base</h1>
                           <Document
                                                    file={`./${catalog.link}`}
                                                    onLoadSuccess={({ numPages }) => console.log(`Total number of pages: ${numPages}`)}
                           >
                             <Page pageNumber={1} />
                           </Document>
                           </div>
--------

  

 import React, { Component , } from 'react';
 import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import Icofont from 'react-icofont';

import { NavLink } from "react-router-dom";
//import { Link } from "react-scroll";
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

                   <li> <a href="https://www.linkedin.com/in/esprit-entreprise-21a7a4a2/"  rel="noopener noreferrer" target="_blank">
                    <i class="fab fa-linkedin-in  fa-fw "style={{color: 'red'}}/></a></li>

                    <li><a href="https://www.tiktok.com/@espritentreprise" rel="noopener noreferrer" target="_blank">
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
                    <Image width="150px"src="/logo-final.png" />
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
                    
                  {/* 
                  
                    <LinkContainer style={{color: 'black'}} to="/etablissement">
                    <Nav.Link >	Missions </Nav.Link>
                    </LinkContainer>

                    <LinkContainer style={{color: 'black'}} to="/services">
                    <Nav.Link >Nos savoir-faire</Nav.Link>
                    </LinkContainer>

                    <LinkContainer  style={{color: 'black'}} to="/moyens">
                    <Nav.Link >Nos Moyens </Nav.Link>
                    </LinkContainer>

                    <LinkContainer  style={{color: 'black'}} to="/certifications">
                     <Nav.Link >Certifications  </Nav.Link>
                      </LinkContainer>

                    <LinkContainer  style={{color: 'black'}} to="/domaines">
                    <Nav.Link > Nos domaines </Nav.Link>
                    </LinkContainer>

                    <NavDropdown  style={{color: 'black'}} title="Formation" id="navDropdown" >
                    <NavDropdown.Item >
                    <LinkContainer  style={{color: 'black'}} to="/formation">
                    <Nav.Link > Domaines de formation </Nav.Link>
                    </LinkContainer>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                    <LinkContainer  style={{color: 'black'}} to="/catalog">
                    <Nav.Link >  Catalogue de formations </Nav.Link>
                    </LinkContainer>
                    </NavDropdown.Item>

                    </NavDropdown>
                    <LinkContainer  style={{color: 'black'}} to="/plateforme">
                    <Nav.Link > Plateforme </Nav.Link>
                    </LinkContainer>
                    
                    */}

                
               

            

                    {
                        userInfo ? (
                            <NavDropdown id="navDropdown"  title={userInfo.name.toUpperCase() } >
                                {
                                    userInfo && userInfo.isAdmin && (
                                        <LinkContainer to="/admin/dashboard">
                                            <NavDropdown.Item > tableau de bord </NavDropdown.Item>
                                        </LinkContainer>
                                    )
                                }
                            
                                {
                                    userInfo && userInfo.isAdmin || (
                                <LinkContainer to="/reservation">
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
