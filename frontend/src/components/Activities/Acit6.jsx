import React, { Component } from "react";
import Icofont from "react-icofont";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";
import { MDBContainer, MDBRow } from "mdbreact";
import Lightbox from "react-image-lightbox";
import './styleAcit.css'


const images = [
    "./MASSAI1.jpg" ,
    "./MASSAI2.jpg" ,
    "./MASSAI3.jpg" ,
    "./MASSAI4.jpg" ,
    "./MASSAI5.jpg" 
  ];
  
  const smallImages = [
    "./MASSAI1.jpg" ,
    "./MASSAI2.jpg" ,
    "./MASSAI3.jpg" ,
    "./MASSAI4.jpg" ,
    "./MASSAI5.jpg"    
  ];

class Acit6 extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          photoIndex: 0,
          isOpen: false
        };
      }

    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <React.Fragment>
                <section id="works" className="our-works ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <div className="section-title">
                                        <h2>{this.props.sectionTitle}</h2>
                                        <p>{this.props.sectionDescription}</p>
                                        <span className="section-title-bg">
                                            {this.props.SectionbgTitle}
                                        </span>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>

                    <MDBContainer>
                        <div className="mdb-lightbox no-margin">
                            <MDBRow>
                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[0]}
                                            alt="Gallery 0"
                                            className="img-fluid"
                                            width= "360px"
                                            height = "390px"
                                            />
                                          
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[1]}
                                            alt="Gallery 1"
                                            className="img-fluid"
                                            width= "360px"
                                            height = "390px"
                                            />
                                          
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[2]}
                                            alt="Gallery 2"
                                            className="img-fluid"
                                            width= "360px"
                                            height = "390px"
                                            />
                                            
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[3]}
                                            alt="Gallery 3"
                                            className="img-fluid"
                                            width= "360px"
                                            height = "390px"
                                            />
                                            
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[4]}
                                            alt="Gallery 4"
                                            className="img-fluid"
                                            width= "360px"
                                            height = "390px"
                                            />
                                        </figure>
                                    </div>
                                </div>


                                
                            </MDBRow>
                        </div>
                        {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            imageTitle={photoIndex + 1 + "/" + images.length}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })
                            }
                            onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })
                            }
                        />
                        )}
                    </MDBContainer>
                </section>
            </React.Fragment>
        );
    }
}
//Props Types
Acit6.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
};

//Default Props
Acit6.defaultProps = {
    SectionbgTitle: "",
    sectionTitle:  "  atelier avec certification 'Applications de l'IA pour la détection d'anomalies'  ",
    sectionDescription:
        "",
};

export default Acit6;
