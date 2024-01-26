import React, { useRef } from "react";
import { CustomHrRed } from "./CustomHrRed"
import { CustomHrGray } from "./CustomHrGray"
import ReactPlayer from "react-player";
import IconList from "./IconList"

import { Card, Col, ListGroup, Row, Tab ,
    Container,
    Image
} from 'react-bootstrap'

import './domaines.css'

const Domaines = () => {


    return (
      
        <Container className="main"  fluid>
            <br />
            <br />
            <br/>

            <Tab.Container style={{ marginBottom: "80px" }}>
              <Col>
                <Row>
                  <div style={{ display: "flow-root" }}>
                    <h3 className="text-esprit">Nos Champs d’interventions</h3>
                    <CustomHrGray />
                    <br />
                  </div>
                </Row>
                <Row className="margin-top-80">
                <br />
            <br />
            <br/>
                  <h4 className="text-esprit">LA FORMATION CONTINUE DES ENTREPRISES</h4>
                  <br />
            <br />
            <br/>
                </Row>
                <Tab.Container defaultActiveKey="#link1" >
                  <Row className="margin-top-80" >
                    <Col sm={4}>
                      <ListGroup>
                        <ListGroup.Item action href="#link1"  style={{ color: 'WHITE', backgroundColor: '#e60000'}} >
                          Démarche
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2" style={{ color: 'WHITE', backgroundColor: '#CE1212'}}>
                          Niveau
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3" style={{ color: 'WHITE', backgroundColor: '#810000'}}>
                          Population
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col sm={8}>
                      <Tab.Content>
                        <Tab.Pane eventKey="#link1">
                          <div>
                            <h4 style={{ color: "#ed1c24" }}>
                              Une démarche centrée sur l’analyse des besoins spécifiques de chaque entreprise
                            </h4>
                          
                            <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                              <li>Prospecter par des visites personnalisées aux entreprises.</li>
                              <li>Présenter l’offre d’Esprit en formation continue par secteur d’activité.</li>
                              <li>
                                Enquêter auprès des services concernés pour identifier leurs besoins en compétences.
                              </li>
                              <li>Analyser et consolider les besoins de l’entreprise en formation continue.</li>
                              <li>Elaborer les cahiers des charges en collaboration avec l’entreprise.</li>
                              <li>Proposer un plan d’action et le faire valider par l’entreprise.</li>
                              <li>Mettre en œuvre la formation.</li>
                              <li>Evaluer à chaud et à froid la formation.</li>
                            </ul>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                          <div>
                            <h4 style={{ color: "#ed1c24" }}>Un Niveau de Formation adapté à l’analyse des besoins</h4>
                            
                            <Col style={{ textAlign: "-webkit-center" }}>
                              <Card style={{ width: "46rem" }}>
                                <Card.Img variant="top" src="./3niveaux.PNG"/>
                              </Card>
                            </Col>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link3">
                          <div>
                            <h4 style={{ color: "#ed1c24" }}>Population cible et Niveau de qualification</h4>
                            <CustomHrRed />
                            <p>OP, OQ, CAP, BTP, BTS, CADRES….</p>
                            <p>Champs de compétences visés par la formation :</p>
                            <ul style={{ listStyle: "disc", marginLeft: "22px" }}>
                              <li>Processus de la production / fabrication.</li>
                              <li>Processus de la maintenance.</li>
                              <li>Processus commercial.</li>
                              <li>Processus RH et gestion administrative.</li>
                              <li>Processus de développement des TIC.</li>
                            </ul>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Col>
            </Tab.Container>

            <br />
            <br />
            <br/>
            <br />
            <br />
            <br/>

            <Row className="margin-top-60">
              <h4 className="text-esprit">L’INGENIERIE DE FORMATION</h4>
            </Row>
            <Row className="margin-top-60">
              <Col md={6} xs={12}>
                <IconList data={entreprise} />
              </Col>
              <Col md={6} xs={12}>
                <IconList data={formations} />
              </Col>
            </Row>

            <br />
            <br />
            <br/>
             <br />
            <br />
            <br/>

            <Row className="margin-top-60">
              <h4 className="text-esprit">LA CERTIFICATION DE COMPÉTENCES</h4>
            </Row>
            <Row className="margin-top-60">
              <p>
                Assurer l’évaluation et la certification des compétences techniques en collaboration avec les organismes
                Compétents pour :
              </p>
              <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                <li>Recruter du personnel.</li>
                <li>Effectuer un bilan des compétences du personnel.</li>
                <li>Certifier les compétences du personnel.</li>
                <li>Identifier des besoins en formation au profit des entreprises.</li>
              </ul>
            </Row>


            
        </Container>
    )
}
const entreprise = {
  icon: "icofont-briefcase",
  title: "Assistance aux entreprises",
  description: "Une assistance professionnelle :",
  list: [
    "Élaboration et mise à jour des Référentiels d’Emploi et des Compétences (REC)",
    "Identification des besoins en formation",
    "Élaboration des cahiers des charges",
    "Élaboration des plans de formation",
    "Réalisation des plans de formation",
    "Évaluation des actions de formation",
    "Implantation et développement de la fonction formation en entreprises.",
  ],
}
const formations = {
  icon: "icofont-hat",
  title: "Assistance aux opérateurs de formation",
  description: "Une assistance académique :",
  list: [
    "Élaboration et mise à jour des Référentiels de Formation (RF)",
    "Élaboration des programmes de formation initiale",
    "Élaboration des catalogues de formation continue",
    "Élaboration des supports de formation",
    "Implantation des programmes de formation",
    "Mise en œuvre de la formation initiale",
    "Ré-ingénierie des structures de formation.",
  ],
}
export default Domaines
