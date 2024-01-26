import React, { useState, useEffect,  } from 'react'
import {
    Form,
    Button,
    Row,
    Col,
    Container,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from './../../../components/Message/Message'
import Loader from './../../../components/Loader/Loader'
import { updateUserProfile } from './../../../actions/userActions'

const EditProfile = ({ history }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
    
    const [confirmPassword, setConfirmPassword] = useState('') ;
    const [message, setMessage] = useState('') ;

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { loading, user, error } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
                setName(user.name)
                setEmail(user.email)
                
            
        }
    }, [userInfo, history, user, dispatch])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
        }
    }

    return (
        <div className="main"  fluid >

        <Container style={{ marginBottom: '50px', marginTop: '20px' }}>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {success && <Message variant='success'> Profil mis à jour </Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Row>
                    <Col md={5}>
                        <Form.Group controlId='name'>
                            <Form.Label> Prénom et nom </Form.Label>
                            <Form.Control
                                type="name"
                                value={name}
                                placeholder ={user.name}
                                onChange={(e) => setName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='email'>
                            <Form.Label>Email  </Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                    </Col>
                    <Col md={5}>
                        <Form.Group controlId='password'>
                            <Form.Label> Mot de passe</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='confirmPassword'>
                            <Form.Label> Confirmer le mot de passe </Form.Label>
                            <Form.Control
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Button type="submit" style={{  backgroundColor: 'red'  }} >Mettre à jour</Button>

            </Form>
        </Container>
   </div>
    )
}

export default EditProfile 
