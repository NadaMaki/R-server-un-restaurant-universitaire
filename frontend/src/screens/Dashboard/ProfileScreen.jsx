import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import EditProfile from '../../components/DashBoard/Profile/EditProfile'
import Meta from '../../components/Helmet/Meta'
import SideBarComponents from '../../components/SideBar/SideBarComponents'

const ProfileScreen = () => {
    return (
        <div >
            <Meta
                title=" | Admin Profile"
            />
            <div className="main"  fluid >       
            <Container fluid>
                <Row>
                    <Col md={3}>
                        <h4> Fichier administrateur </h4>
                    </Col>
                    <Col md={9}>
                        <h4 style={{ marginLeft: "30px" }}> Modifier Profil de l'utilisateur </h4>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <SideBarComponents />
                    </Col>
                    <Col md={9}>
                        <EditProfile />
                    </Col>
                </Row>
            </Container>
        </div>
        </div> 
    )
}

export default ProfileScreen
