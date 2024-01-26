import React, { useEffect , }  from 'react' 
import  {LinkContainer}  from 'react-router-bootstrap'

import {Table, Button, Container } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'

import Message from '../../../components/Message/Message' 
import Loader from '../../../components/Loader/Loader' 

import { listUsers , deleteUsers }  from './../../../actions/userActions'




const UserList = ({ history }) => {

    const dispatch = useDispatch()

    const userList = useSelector(state => state.userList)
    const { loading, error, users } = userList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userDelete = useSelector(state => state.userDelete)
    const { success: successDelete } = userDelete

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listUsers())
        } else {
            history.push('/login')
        }
    }, [dispatch, history, successDelete, userInfo])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteUsers(id))
        }
    }

    const goBack = () => {
        history.goBack(); // This function navigates back to the previous page
      };
    return (
        <div className="main"  fluid >

        <div>
            <LinkContainer   to="/addUser"  style={{ float: 'right',  backgroundColor: 'red'  }} className="mr-3 mb-3">

            <Button > ajouter un administrateur </Button>
            </LinkContainer>
         
            <Button  type="submit"  style={{ float: 'right',  backgroundColor: 'red'  }} onClick={goBack}>Retourner</Button>       

           


            <Container>
                {loading ? <Loader />
                    : error ? <Message variant='danger'>{error}</Message>
                        : (
                            <div class="table-responsive text-nowrap">
                           <Table    responsive    class="table table-striped" >
                                <thead>
                                    <tr>
                                         <th>Nom et prénom</th>
                                         <th>E-mail </th>
                                         <th>Role</th>
                                         <th>Administrateur</th>
                                         <th>Modifier/Supprimer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map(user => (
                                            <tr key={user._id}>
                                                <td>{user.name}</td>
                                                <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                                                <td>{user.level}</td>

                                                <td>
                                                    {
                                                        user.isAdmin ? (
                                                            <i className="fas fa-check" style={{ color: 'green' }}></i>
                                                        ) : <i className="fas fa-times" style={{ color: 'red' }}></i>
                                                    }
                                                </td>
                                                <td>
                                                    <LinkContainer to={`/admin/user/${user._id}/edit`}>
                                                        <Button variant="light" className="btn btn-sm">
                                                            <i className="fas fa-edit"></i>
                                                        </Button>
                                                    </LinkContainer>
                                                    <Button
                                                        variant="danger"
                                                        className="btn-sm mr-2"
                                                        onClick={() => deleteHandler(user._id)}
                                                    >
                                                        <i className="fas fa-trash-alt"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </div>
                        )
                }
            </Container>
        </div>
        </div>

    )
}

export default UserList
