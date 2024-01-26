import React, { useState, useEffect } from 'react'
//import { Link } from 'react-router-dom'
import { Form, Button, InputGroup } from 'react-bootstrap';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // Import eye icons

import { useDispatch, useSelector } from 'react-redux'
import Message from '../Message/Message'
import Loader from '../Loader/Loader'
import FormContainer from '../FormContainer/FormContainer'
import { login } from '../../actions/userActions'
import Meta from '../Helmet/Meta'

const LoginComponent = ({ location, history }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch()
    ///



    const redirect = location.search ? location.search.split('=')[1] : '/'

//
    const userLogin = useSelector(state => state.userLogin)
    const { loading, error ,userInfo } = userLogin
   
 useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [userInfo, history, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

    return (
        <div className="main"  fluid >

        <FormContainer >
            <Meta
                title=" | Sign In"
            />
           
            { error && <Message variant='danger'>{error}</Message>}
            { loading && <Loader />}
            <br />
            <br />
            <br />
    
            <br />
            <br />

            <Form onSubmit={submitHandler} className="text-center" >
                <Form.Group controlId='email'>
                    <Form.Label> Email <span style={{ color: 'red' }}>*</span></Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                
         


                <Form.Group controlId="password">
            <Form.Label>
              Mot de passe <span style={{ color: 'red' }}>*</span>
            </Form.Label>

            <InputGroup>
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
                {showPassword ? <FiEyeOff /> : <FiEye />}
             </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>















                <Button type="submit"  style={{  backgroundColor: 'red'  }}> Connexion </Button>
                <br /><br /><br />
            </Form>

            

        </FormContainer>
        </div>
    )
}

export default LoginComponent
