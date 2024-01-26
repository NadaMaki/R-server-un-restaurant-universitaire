import React, { Component } from "react";
import PropTypes from "prop-types";
import OwlCarousel from "react-owl-carousel3";
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import Icofont from 'react-icofont';

import './stylespartner.css'
class Partners extends Component {
    render() {
        //Partner loop start
        const partnerData = this.props.partnersData.map((partner, index) => (
            <div className="single-partner-logo main" key={index}>
            {partner.partnerLink && (     <Link to={partner.partnerLink} className="logo-preview">
                    <img src={partner.partnerLogo} alt="partnerLogo" width = "100px"   height = "100px" />
                    
                </Link>
                      )}

            </div>
        ));
        //Partner loop END
        return (
            <React.Fragment>
                <section className="our-partners ptb-100 main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <div className="section-title">
                                    <h1 style={{color: 'red'}} > {this.props.sectionTitle} </h1>

                                        
                                        <p>{this.props.sectionDescription}</p>
                                        <span className="section-title-bg">{this.props.SectionbgTitle}</span>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>

                        <div className="row">
                            <OwlCarousel
                                className="owl-theme partners-slides"
                                dots= {false}
                                loop={true}
                                margin={100}
                                autoplay={true}
                                smartSpeed={1000}
                                nav={true}
                                navText={[
                                    "<i class='icofont-arrow-left '></i>",
                                    "<i class='icofont-arrow-right '></i>"
                                ]}
                                responsive={{
                                    0: { items: 1 },
                                    768: {
                                        items: 3
                                    },
                                    1200: {
                                        items: 6
                                    }
                                }}
                            >
                                {partnerData}
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

//Props Types
Partners.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    partnersData: PropTypes.array
};

//Default Props
Partners.defaultProps = {
    SectionbgTitle: "",
    sectionTitle: "Partenaires",
    sectionDescription: "Nos partenaires académiques, technologiques et industriels sont toujours présents ",
    partnersData: [
        
        {
            partnerLogo:   "./imageP1.jpg" ,  
        
        },

        {
            partnerLogo:   "./imageP2.jpg" ,  
        
        },

        {
            partnerLogo:   "./imageP3.jpg" ,  
        
        },

        {
            partnerLogo:   "./imageP4.jpg" ,  
        
        },

        {
            partnerLogo:   "./imageP5.jpg" ,  
        
        }, 

        {
            partnerLogo:   "./imageP6.jpg" ,  
        
        },
        {
            partnerLogo:   "./imageP7.jpg" ,  
        
        }, 

        {
            partnerLogo:   "./imageP8.jpg" ,  
        
        }, 
        {
            partnerLogo:   "./imageP9.jpg" ,  
        
        },      
    ]
};
export default Partners;
