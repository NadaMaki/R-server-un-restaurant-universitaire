import React, { useState, useEffect, useRef ,   } from 'react'
import {
    Form,
    Button,
    Row,
    Col,
    Container,
    Table,
    Image,
    Overlay,
    Popover
} from 'react-bootstrap'
import { Scrollbar } from "react-scrollbars-custom";
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from './../../components/Message/Message'
import Loader from './../../components/Loader/Loader'
import { getUserDetails, updateUserProfile } from '../../actions/userActions'
import Meta from '../../components/Helmet/Meta';

const ProfileScreen = ({ history }) => {

    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    
 const [description, setDescription] = useState('')
 const [date, setDate] = useState('')
 const [address, setAddress] = useState('')
 const [level, setLevel] = useState('')
 const [phonenumber, setPhonenumber] = useState('')

    const [message, setMessage] = useState(null)

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
            if (!user.name) {
                dispatch(getUserDetails('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
                setDescription(user.description)
                setDate(user.date)
                setAddress(user.address)
                setLevel(user.level)
                setPhonenumber(user.phonenumber)
                
            }
        }
    }, [userInfo, history, user, dispatch])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(updateUserProfile({ id: user._id, name, email, password, description, date, address, level, phonenumber }))
        }
    }

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);

    };


    return (
        <Container  style={{ marginBottom: '50px' }}>
            <Meta
                title=" | Profile"
            />
            
                
                    <h2 style={{ marginTop: '110px' }}> Profil de l'utilisateur </h2>
                    {message && <Message variant='danger'>{message}</Message>}
                    {error && <Message variant='danger'>{error}</Message>}
                    {success && <Message variant='success'>mis à jour </Message>}
                    {loading && <Loader />}
                    <Form onSubmit={submitHandler}>
                <Row>
                
                    <Col md={5}>

                        <Form.Group controlId='name'>
                            <Form.Label> Nom et Prénom <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

            <br />
           
                        <Form.Group controlId='email'>
                            <Form.Label> Email   </Form.Label>
                            <Form.Control
                                placeholder="admin@admin"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
            <br />
            
                        <Form.Group controlId='password'>
                            <Form.Label> Mot de passe  </Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
            <br />
            
                   
                   

         
                     
          
                <Button type="submit" style={{  backgroundColor: 'red'  }} > mettre à jour </Button> 


                    </Col>
                </Row>


                    </Form>
            
        </Container>
    )
}

export default ProfileScreen 
