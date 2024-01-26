import React, { Component } from "react";
import Icofont from "react-icofont";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";
import { MDBContainer, MDBRow } from "mdbreact";
import Lightbox from "react-image-lightbox";
import './styleAcit.css'


const images = [
    "./campus1.jpg" ,
    "./campus2.jpg" ,
    "./campus3.jpg" 
  ];
  
  const smallImages = [
    "./campus1.jpg" ,
    "./campus2.jpg" ,
    "./campus3.jpg" 
  ];

class A7 extends Component {
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
                                            alt="Gallery"
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
                                            alt="Gallery"
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
                                            alt="Gallery"
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
                                            alt="Gallery"
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
                                            alt="Gallery"
                                            className="img-fluid"
                                            />
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[5]}
                                            alt="Gallery"
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
A7.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
};

//Default Props
A7.defaultProps = {
    SectionbgTitle: "",
    sectionTitle: "  ",
    sectionDescription:
        "",
};

export default A7;
