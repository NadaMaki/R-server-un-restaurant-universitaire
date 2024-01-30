import React,  { useState, useEffect } from 'react'

import {
    Form,
    Button,
    Row,
    Col
} from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'

import Message from '../Message/Message'

import Loader from '../Loader/Loader'

import FormContainer from '../FormContainer/FormContainer'

import { register } from '../../actions/userActions'

import Meta from '../Helmet/Meta'

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const AddUser = ({ location, history }) => {

    const [name, setName] = useState('')
    const [level, setLevel] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)


    const { loading, userInfo, error } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'


    useEffect(() => {
        if (userInfo) {
            history.push("/login")             
        }
    }, [userInfo, history])


    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name,level, email, password))
        }
    }

    return (    
        
        
        <div className="main"  fluid >


        <FormContainer>
            <Meta
                title=" | Register"
            />
             <br />
            <br /> <br />
            <br />
        
           
        

            <h1 style={{ marginTop: '120px' }}> Ajouter un administrateur </h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
            <Row>
                    <Col md={5}>
                        <Form.Group controlId='name'>
                            <Form.Label> Nom et prénom <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Entrez votre nom et prénom "
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <div class="form-group">
                   <label for="selection"> Role <span style={{ color: 'red' }}>*</span></label>
                   <select id="selection" class="form-control"    value={level}
                                onChange={(e) => setLevel(e.target.value)}
                                required >
                     <option value="">Liste de choix...</option>
                     <option value="Etudiant">Etudiant</option>
                     <option value="Admin">Admin</option>
                     <option value="Enseignant vacataire">Enseignant vacataire</option>
                      <option value="Enseignant permanent">Enseignant permanent</option>
                   </select>
                 </div>





                        <Form.Group controlId='email'>
                            <Form.Label> Email  <span style={{ color: 'red' }}>*</span> </Form.Label>
                            <Form.Control
                                type="email"
                                placeholder=" Entrez votre Email "
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                    </Col>
                        <Col md={5}>
                        <Form.Group controlId='password'>
                            <Form.Label>  Mot de passe   <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Entrez le mot de passe"
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            ></Form.Control>
                        </Form.Group>


                        <Form.Group controlId='confirmPassword'>
                            <Form.Label>  Confirmez le mot de passe  <span style={{ color: 'red' }}>*</span>  </Form.Label>
                            <Form.Control
                                type="password"
                                placeholder=" Confirmez le mot de passe "
                                value={confirmPassword}
                                required
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                  
                        <Button type="submit"  style={{  backgroundColor: 'red'  }} >Inscription</Button>
                    </Col>
                </Row>
                <br />
                <br />  <br />
            </Form>
            
        </FormContainer>
        
          </div>
    )
}



export default AddUser
