import React,  { useState, useEffect } from 'react'

import {
    Form,
    Button,
    Row,
    Col
} from 'react-bootstrap'


import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './reservationcss.css'



import { useDispatch, useSelector } from 'react-redux'

import Message from '../Message/Message'

import Loader from '../Loader/Loader'

import FormContainer from '../FormContainer/FormContainer'


import  { register }  from '../../actions/reservationActions';

import Meta from '../Helmet/Meta'

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { reservationRegisterReducer } from '../../reducers/reservationReducer';

const Reservation = ({ location, history }) => {

    const [nbjour, setNbjour] = useState('');
    const [email , setEmail] = useState('');
    const [phonenumber , setPhonenumber] = useState('');
    const [serviice, setServiice] = useState('')
    const [date0, setDate0] = useState('');
    const [date1, setDate1] = useState('');

    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const reservationRegister = useSelector(state => state.reservationRegister)


    const { loading, reservationInfo, error } =  reservationRegister

    /////userLogin

   //const userLogin = useSelector((state) => state.userLogin);
   //const { userInfo } = userLogin;
   //const userEmail = userInfo ? userInfo.email : '';
    

 // const redirect = location.search ? location.search.split('=')[1] : '/'


    useEffect(() => {

        if (reservationInfo) {
            history.push('/reservation')             
        }
    }, [reservationInfo, history])



    
  //  const submitHandler = (e) => {
  //      alert('Merci pour votre message');
  //      e.preventDefault()
  //      dispatch(register(email ,phonenumber,nbjour,serviice, date0 , date1)) .push('/reservation') 
  //      
  //  }
  
    const submitHandler = (e) => {
      // Your existing logic
    
      dispatch(register(email, phonenumber, nbjour, serviice, date0, date1))
        .then(() => {
          alert('Le succès est réservé');
          history.push('/');
        })
        .catch((error) => {
          // Handle dispatch error
          console.error('Dispatch error:', error);
        });
    
      e.preventDefault();
    };


    const goBack = () => {
      history.goBack(); // This function navigates back to the previous page
    };

///////////////////// cal data
//const calculateNumberOfDays = (date0 , date1) => {
//    const startDate = new Date(date0);
//    const endDate = new Date(date1);
//
//    const timeDifference = endDate - startDate;
//
//    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
//
//    setNbjour(daysDifference);
//  };
useEffect(() => {
    calculateNumberOfDays();
  }, [date0, date1]);

  const calculateNumberOfDays = () => {
    const startDate = new Date(date0);
    const endDate = new Date(date1);

    // Check if both dates are valid
    if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
      const timeDifference = endDate - startDate +1;

      // Calculate daysDifference and add +1 if the start date is the same as the end date
      const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

      setNbjour(daysDifference);
    } else {
      // Handle invalid dates if needed
      setNbjour('');
    }
  };

/////////////////+-1j
    const getMinimumDate = () => {
        const currentDate = new Date();
        currentDate.setHours(currentDate.getHours() + 24); // Add 24 hours
        const formattedDate = currentDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
        return formattedDate;
      };
    return (

        <FormContainer>
            <Meta
                title=" | Réserver"
            />
            <br /> <br /> <br />  <br />
        
           
          <Button  type="submit"  style={{ float: 'right',  backgroundColor: 'red'  }} onClick={goBack}>Retourner</Button>       
                <br />
                <br />

            <h1 > Réserver </h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>


            


                           <Form.Group controlId='email'>
                            <Form.Label> Email  <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="email"
                                placeholder=" "
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            ></Form.Control>
            </Form.Group>

                        <Form.Group controlId='phonenumber'>
                            <Form.Label> Numéro de téléphone <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="phonenumber"
                                placeholder=" "
                                value={phonenumber}
                                required
                                onChange={(e) => setPhonenumber(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        
                        <div class="form-group">
                        <label for="selection"> Plats <span style={{ color: 'red' }}>*</span></label>
                        <select id="selection" class="form-control"    value={serviice}
                                     onChange={(e) => setServiice(e.target.value)}
                                     required >
                          <option value="">Liste de choix...</option>
                          <option value="Déjeuner">Déjeuner</option>
                        </select>
                      </div>
            
                      <Form.Group controlId='name'>
        <Form.Label> Nombre de jours <span style={{ color: 'red' }}>*</span></Form.Label>
        <Form.Control
          type="text"
          placeholder=" "
          value={nbjour}
          readOnly
          required
        />
      </Form.Group>

      <Form.Group controlId='date0'>
        <Form.Label> Date de début de réservation  <span style={{ color: 'red' }}>*</span></Form.Label>
        <Form.Control
          type="date"
          value={date0} 
          min={getMinimumDate()}
          required
          onChange={(e) => {
            setDate0(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group controlId='date1'>
        <Form.Label> Date de fin de réservation  <span style={{ color: 'red' }}>*</span></Form.Label>
        <Form.Control
          type="date"
          placeholder=" à MM/DD/YYY "
          value={date1}
          min={getMinimumDate()}

          required
          onChange={(e) => {
            setDate1(e.target.value);
          }}
        />
      </Form.Group>

    <Button type="submit"  style={{  backgroundColor: 'red'  }} >Réserver </Button>
              
<               br />  <br />

                <br />  <br />
            </Form>
            
        </FormContainer>
    ) 
}

export default Reservation
