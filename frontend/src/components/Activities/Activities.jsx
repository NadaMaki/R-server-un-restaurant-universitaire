import React, { Component ,   } from 'react';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import './styleActivities.css';
import {
    Col,
    Container,
    Row,
    Image
} from 'react-bootstrap';


class Activities extends Component {

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
        
        <div className="col-md-6 col-lg-6 main"  key={index}>
            <div className="blog-item">
            {blog.postLink && (       <Link to={blog.postLink} className="blog-img">
                  
                    <img  src= {blog.postImage}  alt="blog-one" />

                    <br/>         <br/>        <br/>
                    </Link>
            )}
                    <div className="title-meta text-center ">
                    {blog.postLink && (        <Link to={blog.postLink}>
                    <h3> {blog.posttitle} </h3>
                        <h6  style={{color: 'red'}} > <br /> lire la suite </h6>

                            </Link> )}
                       
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

                    <h1 style={{color: 'red'}}  >    {this.props.sectionTitle}   </h1>
                                
                                             

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
Activities.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    btnLink: PropTypes.string,
    BlogBtn: PropTypes.string,
    blogsData: PropTypes.array
};

//Default Props
Activities.defaultProps = {
    SectionbgTitle: "",
    sectionTitle: "Actualités  ",
    sectionDescription:  "Restez au courant de nos actualités et événements",

        blogsData: [

            {
                postImage:  "./confrence0.jpg" ,
                postLink: "/acit4",
                posttitle: " Conférence et Formation 'Évolution de la Data Science en Tunisie' ",
                
            },

            {
                postImage:  "./multimedia3.jpg" ,
                postLink: "/acit5",
                posttitle: " formation multimedia (Traitement d'image ,son ,vidéo .. ) ",
                
            }, 

            {
                postImage:  "./MASSAI5.jpg" ,
                postLink: "/acit6",
                posttitle: " atelier avec certification 'Applications de l'IA pour la détection d'anomalies' ",
                
            }, 

           
        {
            postImage:  "./conseil1.jpg" ,
            postLink: "/acit1",
            posttitle: "Atelier de conseil et de communication",
            
        },

        {
            postImage:  "./inter1.jpg" ,
            postLink: "/acit2",
            posttitle: "Winter Workshops 2022",
           
        },

        {
            postImage:  "./campus2.jpg" ,
            postLink: "/a7",
            posttitle: "Conférence Campus France",
           
        },

        {
            postImage:  "./work1.jpg" ,
            postLink: "/acit3",
            posttitle: " PAEE/ALE - WORKSHOP ",
           
        },



    ]
};

export default Activities;
