import React, { useState, useEffect  ,   } from 'react'
import { useHistory } from 'react-router-dom';

import  {Link}  from 'react-router-dom' ;

import {Form , Button }   from 'react-bootstrap'


import { useDispatch } from 'react-redux'
import {  useSelector } from 'react-redux'


import Message from '../../components/Message/Message'

import Loader from '../../components/Loader/Loader'

import    FormContainer  from '../../components/FormContainer/FormContainer'


import { getUserDetails  } from '../../actions/userActions'
import {  updateUser } from '../../actions/userActions'

import { USER_UPDATE_RESET } from './../../constants/userConstants'

import Meta from '../../components/Helmet/Meta'

const UserEditScreen = ({ match, history }) => {

    const userId = match.params.id

    const [name, setName] = useState('') ;
    const [email, setEmail] = useState('') ;
    const [password, setPassword] = useState('') ;
    const [description, setDescription] = useState('') ;
    const [date, setDate] = useState('') ;
    const [address, setAddress] = useState('') ;
    const [level, setLevel] = useState('') ;
    const [phonenumber, setPhonenumber] = useState('') ;
    const [isAdmin, setIsAdmin] = useState(false) ;

    const dispatch = useDispatch()  ;

    const userDetails = useSelector(state => state.userDetails)
    const { loading, user, error } = userDetails

    const userUpdate = useSelector(state => state.userUpdate)
    const { loading: loadingUpdate, success: successUpdate, error: errorUpdate } = userUpdate

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: USER_UPDATE_RESET })
            history.push('/admin/userList')
        } else {
            if (!user || !user.name || user._id !== userId) {   
                             dispatch(getUserDetails(userId))
            } else {
                setName(user.name)
                setEmail(user.email)
                setPassword(user.password)
                setDescription (user.description)
                setDate (user.date)
                setAddress (user.address)
                setLevel (user.level)
                setPhonenumber (user.phonenumber)
                setIsAdmin(user.isAdmin)
            }
        }
    }, [user, userId, dispatch, successUpdate, history])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({ _id: userId, name, email, isAdmin , password, description, date, address, level, phonenumber}))
    }


    const goBack = () => {
      history.goBack(); // This function navigates back to the previous page
    };
    return (
        <>
            <Meta
                title=" | Admin User Edit"
            />
            
            <FormContainer>

                <h1 style={{ marginTop: '120px' }}>Modification utilisateur </h1>
                <Button  type="submit"  style={{ float: 'right',  backgroundColor: 'red'  }} onClick={goBack}>Retourner</Button>       
                <br />
                <br />

                {loadingUpdate && <Loader />}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                    : (
                        <Form onSubmit={submitHandler} style={{ marginBottom: '50px' }}>
                           
                          
                        <Form.Group controlId='name'>
                            <Form.Label> Nom et prénom <span style={{ color: 'red' }}>*</span></Form.Label>
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
                                placeholder= "Entrez un e-mail"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
            <br />
            
                        <Form.Group controlId='password'>
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control
                                placeholder= "Entrer le mot de passe"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
            <br />
                            <Form.Group controlId='isAdmin'>
                                <Form.Check
                                    type="checkbox"
                                    label="Est-ce qu'il est le superviseur ?"
                                    value={isAdmin}
                                    checked={isAdmin}
                                    onChange={(e) => setIsAdmin(e.target.checked)}
                                ></Form.Check>
                            </Form.Group>
                            <Button type="submit"  style={{  backgroundColor: 'red'  }}>Mettre à jour</Button>

                        </Form>
                    )
                }
            </FormContainer>
        </>
    )
}

export default UserEditScreen
