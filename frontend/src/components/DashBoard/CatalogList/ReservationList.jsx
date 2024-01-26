import React, { useEffect , }  from 'react' 
import  {LinkContainer}  from 'react-router-bootstrap'

import {Table, Button, Container } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'

import Message from '../../Message/Message' 
import Loader from '../../Loader/Loader' 

import { listReservations , deleteReservations }  from '../../../actions/reservationActions'




const ReservationList = ({ history }) => {

    const dispatch = useDispatch()

    //user email
   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;
    //    <td>{userInfo ? userInfo.email : ''}</td>


    const reservationList = useSelector(state => state.reservationList)
    const { loading, error, reservations } = reservationList

    const reservationRegister = useSelector(state => state.reservationRegister)
    const { reservationInfo } = reservationRegister

    const reservationDelete = useSelector(state => state.reservationDelete)
    const { success: successDelete } = reservationDelete

   

    useEffect(() => {
     (reservationInfo) && dispatch(listReservations())
  
    }, [dispatch, successDelete, reservationInfo])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteReservations(id))
        }
    }

    const goBack = () => {
        history.goBack(); // This function navigates back to the previous page
      };
   
     
    return (
                <div className="main"  fluid >

        <div>
            <LinkContainer style={{ float: 'right',  backgroundColor: 'red'  }}   to="/reservation">
                <Button style={{  backgroundColor: 'red'  }} className="mr-3 mb-3"> ajouter un Reservation </Button>
                
            </LinkContainer>
    <Button  type="submit"  style={{ float: 'right',  backgroundColor: 'red'  }} onClick={goBack}>Retourner</Button>       

            <Container>
                {loading ? <Loader />
                    : error ? <Message variant='danger'>{error}</Message>
                        : (
                            <div class="table-responsive text-nowrap">
                                <h1> Liste des réservations </h1>
                           <Table    responsive    class="table table-striped" >
                                <thead>
                                    <tr>
                                         <th>Email </th>
                                         <th> Numéro de téléphone </th>
                                         <th>Nombre de jours</th>
                                         <th>Plats</th>
                                         <th> Date de début de réservation</th>
                                         <th> Date de fin de réservation</th>

                                        
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        reservations.map(reservation => (
                                             <tr key={reservation._id}>
                                                <td>{reservation.email}</td>
                                                <td>{reservation.phonenumber}</td>
                                                <td>{reservation.nbjour}</td>
                                                <td>{reservation.serviice}</td>
                                                <td>{reservation.date0}</td>
                                                <td>{reservation.date1}</td>
                                                <td>
                                                                                                 
                                                    <Button
                                                        variant="danger"
                                                        className="btn-sm mr-2"
                                                        onClick={() => deleteHandler(reservation._id)}
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

export default ReservationList
