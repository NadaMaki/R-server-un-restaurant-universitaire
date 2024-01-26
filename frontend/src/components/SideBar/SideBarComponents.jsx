import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import './SideBar.css'

const SideBarComponents = () => {
    return (
        <div className="sidebar" style={{ marginTop: "10px", marginBottom: "60px" }}>
            <ListGroup className="list-group-sidebar">
                <LinkContainer className='link-contain' to="/admin/dashboard">
                    <ListGroup.Item className="border-0 item">
                        <i className="fas icon-fas fa-chart-line"></i> Tableau de bord
                    </ListGroup.Item>
                </LinkContainer>
                <LinkContainer className='link-contain' to="/admin/profile">
                    <ListGroup.Item className="border-0 item">
                        <i className="fas icon-fas fa-user-alt"></i> Profil
                    </ListGroup.Item>
                </LinkContainer>
                <LinkContainer className='link-contain' to="/userlist">
                    <ListGroup.Item className="border-0 item">
                        <i className="fas icon-fas fa-users-cog"></i> liste d'utilisateurs
                    </ListGroup.Item>
                </LinkContainer>

                <LinkContainer className='link-contain' to="/reservationlist">
                    <ListGroup.Item className="border-0 item">
                        <i className="fas icon-fas fa-users-cog"></i>Liste des réservations
                    </ListGroup.Item>
                </LinkContainer>

                <LinkContainer className='link-contain' to="/catalogList">
                    <ListGroup.Item className="border-0 item">
                        <i className="fas icon-fas fa-users-cog"></i> Liste du catalogue
                    </ListGroup.Item>
                </LinkContainer>
               
                <LinkContainer className='link-contain' to="/totalReservation">
                    <ListGroup.Item className="border-0 item">
                        <i className="fas icon-fas fa-users-cog"></i> le nombre total de jours
                    </ListGroup.Item>
                </LinkContainer>

            </ListGroup>
        </div>
    )
}

export default SideBarComponents
