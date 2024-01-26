import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SideBarComponents from '../../components/SideBar/SideBarComponents'
import StatisticsList from '../../components/DashBoard/Statistics/StatisticsList';
import Meta from '../../components/Helmet/Meta';

const DashboardScreen = () => {
    return (
        <div >
            <Meta
                title=" | Admin Dashboard"
            />
                <div className="main"  fluid >    

            <Container fluid>
                <Row>
                    <Col md={3}>
                        <h4> Tableau de bord</h4>
                    </Col>
                    <Col md={9}>
                        <h4 style={{ marginLeft: "30px" }}> Statistiques générales </h4>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <SideBarComponents />
                    </Col>
                    <Col md={9}>
                        <StatisticsList />
                    </Col>
                </Row>
            </Container>
            </div> 
        </div>
    )
}

export default DashboardScreen
