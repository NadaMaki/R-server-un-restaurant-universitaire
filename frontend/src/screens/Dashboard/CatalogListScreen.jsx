import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CatalogList from '../../components/DashBoard/CatalogList/CatalogList'
import Meta from '../../components/Helmet/Meta'
import SideBarComponents from '../../components/SideBar/SideBarComponents'

const CatalogListScreendas = () => {
    return (
        <div >
            <Meta
                title=" | Admin Users"
            />
            <div className="main"  fluid >       
 
            <Container >
                <Row>
                    <Col md={3}>
                        <h4> CatalogS</h4>
                    </Col>
                    <Col md={9}>
                        <h4 style={{ marginLeft: "30px" }}> liste Catalog </h4>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <SideBarComponents />
                    </Col>
                    <Col md={9}>
                        <CatalogList />
                    </Col>
                </Row>
            </Container>
        </div>
        </div>

    )
}

export default CatalogListScreendas
