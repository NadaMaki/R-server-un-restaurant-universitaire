import PropTypes from "prop-types"
import React, { Component } from "react"
import ScrollAnimation from "react-animate-on-scroll"

export default class Services extends Component {
  render() {
    //Service loop start
    const servicedata = this.props.servicesData.map((service, index) => (
      <div className="col-md-6 col-lg-4 text-center" key={index}>
        <div className="service-item">
          <div className="glyph">
        <h1 style={{color: 'red'}}>    <i className={service.icon}/> </h1>
            </div>
          <h4>{service.heading}</h4>
          <p>{service.description}</p>
          <p>{service.description1}</p>
          <p>{service.description2}</p>
          <p>{service.description3}</p>
          <p>{service.description4}</p>
          <p>{service.description5}</p>
          <p>{service.description6}</p>
          <p>{service.description7}</p>
          <p>{service.description8}</p>
          <p>{service.description9}</p>
          <p>{service.description10}</p>
          <p>{service.description11}</p>
        </div>
      </div>
    ))
    //Service loop END
    return (
      <>
        <section id="services" className="services ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <ScrollAnimation animateIn="fadeInUp">
                  <div className="section-title">
                    <h2>{this.props.sectionTitle}</h2>
                    <p>{this.props.sectionDescription}</p>
                    <span className="section-title-bg">{this.props.SectionbgTitle}</span>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
            <div className="row">{servicedata}</div>
          </div>
        </section>
      </>
    )
  }
}

//Props Types
Services.propTypes = {
  SectionbgTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
  servicesData: PropTypes.array,
}

//Default Props
Services.defaultProps = {
  SectionbgTitle: "  ",
  sectionTitle: "DOMAINES DE FORMATION",
  sectionDescription: "",

  servicesData: [
    {
        icon: "icofont-certificate-alt-2",
        heading: "Informatique et Si ",
        description: "Programmation et Bases de Données"  ,
        description1: "Administration des systèmes d’exploitation"  ,
        description2: "Modélisation et programmation objet"  ,
        description3: "Développement Web et Mobile"  ,
        description4: "Java et SGBD"  ,
        description5: "Système et sécurité"  ,
        description6: "Développement orienté cloud"  ,
        description7: "Cloud et virtualisation"  ,
        description8: "Interopérabilité"  ,
        description9: "Application d’entreprise (SharePoint, SOA, Architecture n-tiers)"  ,
        description10: "Test et validation"  ,
       
    },
    {
      icon: "icofont-certificate-alt-2",
      heading: "Télécommunications",
      description: "Réseaux locaux"  ,
      description1: "Interconnexion de réseaux"  ,
      description2: "Réseaux IP et routage"  ,
      description3: "Réseaux de capteurs"  ,
      description4: "Sécurité des réseaux"  ,
      description5: "Microcontrôleurs"  ,
      description6: "Transmission et traitement du signal"  ,
      description7: "Hyper communication"  ,
      description8: "Mesures et instrumentation"  ,
    }, 
    {
        icon: "icofont-certificate-alt-2",
        heading: "Génie Civil et BTP",
        description: "Relevés et Traitement de données topographiques" ,
        description1: "Logiciels de Génie Civil et BTP"  ,
        description2: "Travaux de Bâtiment (Menuiserie, Maçonnerie, Marbrerie, Plomberie sanitaire)"  ,
      },
      {
        icon: "icofont-certificate-alt-2",
        heading: "Electronique, Automatismes",
        description:  "Électronique Industrielle"  ,
        description1: "Automatisme et informatique industrielle"  ,
        description2: "Régulation industrielle"  ,
        description3: "Commande des systèmes robotiques"  ,
      },
      {
        icon: "icofont-certificate-alt-2",
        heading: "Electricité, Électrotechnique",
        description:  "Equipements et installations électriques"  ,
        description1: "Electrotechnique"  ,
        description2: "Exploitation des centrales électriques"  ,
      },
      
      {
        icon: "icofont-certificate-alt-2",
        heading: "Energétique, Froid, Climatisation",
        description:  "Energétique"  ,
        description1: "Froid Industriel"  ,
        description2: "Climatisation"  ,
      },
      {
        icon: "icofont-certificate-alt-2",
        heading: "Mécanique, Electromécanique, Maintenance industrielle et Thermique",
        description:  "Technologies des systèmes mécaniques"  ,
        description1: "Fabrication Mécanique"  ,
        description2: "Techniques et Gestion de la maintenance industrielle"  ,    
        description3: "Systèmes Hydrauliques et pneumatiques"  ,
        description4: "Mécanique des engins de chantiers"  ,
      },
      {
        icon: "icofont-certificate-alt-2",
        heading: "Soudure, construction métallique, chaudronnerie",
        description:  "Techniques et procédures de soudure"  ,
        description1: "Construction métallique"  ,
        description2: "Chaudronnerie"  ,
      },
      {
        icon: "icofont-certificate-alt-2",
        heading: "Génie Industriel, Logistique",
        description:  "Santé, sécurité de Travail et Environnement industriel"  ,
        description1: "Manutention des équipements Industriels"  ,
        description2: "Organisation, Management Industriel et Gestion des projets"  ,
        description3: "Procédés d'exploitation des usines"  ,
      },
      {
        icon: "icofont-certificate-alt-2",
        heading: "Comptabilité, Gestion, Finance",
        description:  "Les Achats et la Gestion de stock"  ,
        description1: "Comptabilité-finance"  ,
        description2: "Gestion de patrimoine"  ,
        description3: "Contrôle de gestion"  ,
      },
      {
        icon: "icofont-certificate-alt-2",
        heading: "Droit, Administration, GRH",
        description:  "Documents et actes juridiques"  ,
        description1: "Assurances"  ,
        description2: "Gestion des archives"  ,
        description3: "Gestion des RH"  ,
      },
      {
        icon: "icofont-certificate-alt-2",
        heading: "Langues et Communication",
        description:  "Langues"  ,
        description1: "Techniques de communication"  ,
      },
      {
        icon: "icofont-certificate-alt-2",
        heading: "SMQ et Qualité Totale",
        description:  "Les normes ISO, démarche Qualité"  ,
        description1: "SMQ et préparation à la certification ISO"  ,
      },
      {
        icon: "icofont-certificate-alt-2",
        heading: "SMQ et préparation à la certification ISO",
        description:  "Pédagogie et Ingénierie de formation"  ,
        description1: "Ingénierie de Formation"  ,
        description2: "Ingénierie Pédagogique"  ,
        description3: "Formation pédagogique du personnel de formation"  ,
      },
  ],
}
