import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1 }) => {
    return (
        <Nav className="jusitfy-content-center mb-4">
            <Nav.Item>
                {
                    step1 
                        ? <LinkContainer to="/login">
                            <Nav.Link>Sign In</Nav.Link>
                        </LinkContainer>
                        :  <Nav.Link disabled>Sign In</Nav.Link>
                }
            </Nav.Item>
         
            
        </Nav>
    )
}

export default CheckoutSteps
