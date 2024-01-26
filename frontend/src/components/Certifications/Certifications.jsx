import React, { Component , } from 'react';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
//import './styleActivities.css'

class Certifications extends Component {

    componentDidMount() {
        let scrollWithOffset = (el, offset) => {
            const elementPosition = el.offsetTop - offset;
            window.scroll({
                top: elementPosition,
                left: 0,
                behavior: "smooth"
            });
        };
        this.setState({ scrollWithOffset });
    }

  render() {
    //Blog loop start
    const blogdata = this.props.blogsData.map((blog, index) => (
        
        <div className="col-md-3 col-lg-3 main"  key={index}>
            <div className="blog-item">
            {blog.postLink && (      <Link to={blog.postLink} className="blog-img">
                  
                    </Link>       )}

             
                    <div title="CoolTip" className="text-center ">
                        <h5>    {blog.posttitle}    </h5>
                       
                    </div>
            
              
            </div>
        </div>
    ));
    //Blog loop END
    return (
        <React.Fragment>
            <section id="blog" className="our-blog ptb-100 main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="section-title">

                    <h1   >    {this.props.sectionTitle}   </h1>
                                
                                             

                                    <p>{this.props.sectionDescription}</p>
                                    <span className="section-title-bg">{this.props.SectionbgTitle}</span>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    <div className="row">
                        {blogdata}
                       
                    </div>
                </div>
            </section>   
        </React.Fragment>
    );
  }
}
//Props Types
Certifications.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    btnLink: PropTypes.string,
    BlogBtn: PropTypes.string,
    blogsData: PropTypes.array
};

//Default Props
Certifications.defaultProps = {
    SectionbgTitle: "",
    sectionTitle: "Certifications reçues par ESPRIT Entreprise ",
    sectionDescription:  "",

        blogsData: [
        {
            //postImage:  "./a101.jpg" ,
            //postLink: "/acit1",
            posttitle: "Centre de certification Pearson VUE",
            
        },

        {
            //postImage:  "./a302.jpg" ,
            //postLink: "/acit2",
            posttitle: "Centre de certification Prometric",
           
        },

        {
            //postImage:  "./a72000.jpg" ,
            //postLink: "/a7",
            posttitle: "Centre de certification CERTIPORTE",
           
        },

        {
            //postImage:  "./a72000.jpg" ,
            //postLink: "/a7",
            posttitle: "Centre de certification CERTIPORTE",
           
        },

        {
            //postImage:  "./a207.jpg" ,
            //postLink: "/acit3",
            posttitle: "Centre de certification lSTQB",
           
        },

        {
            //postImage:  "./a207.jpg" ,
            //postLink: "/acit3",
            posttitle: "Centre de certification SolidWork,CATIA et MATLAB",
           
        },

        {
            //postImage:  "./a207.jpg" ,
            //postLink: "/acit3",
            posttitle: "Académie Oracle",
           
        },

        {
            //postImage:  "./a207.jpg" ,
            //postLink: "/acit3",
            posttitle: "Microsoft lT Academy et membre du MlC (Mie rosoft lnnovation Center)",
           
        },


        {
            //postImage:  "./a207.jpg" ,
            //postLink: "/acit3",
            posttitle: "Académie VMware : Centre de test pour La virtualisation .",
           
        },

        {
            //postImage:  "./a207.jpg" ,
            //postLink: "/acit3",
            posttitle: "Académie LPl",
           
        },

        {
            //postImage:  "./a207.jpg" ,
            //postLink: "/acit3",
            posttitle: "Membre de L’lTSMF (Organisation internationale des Certifiés lTlU)",
           
        },

        {
            //postImage:  "./a207.jpg" ,
            //postLink: "/acit3",
            posttitle: "Académie SAP ",
           
        },

    ]
};

export default Certifications;
