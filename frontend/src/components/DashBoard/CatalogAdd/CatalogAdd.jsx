import React,    { useState, useEffect ,  } from 'react' ;


import { Form, Button, Row, Col } from 'react-bootstrap'

import  {useDispatch, useSelector} from 'react-redux'



import Message from '../../Message/Message'

import Loader from '../../Loader/Loader'

import Meta from '../../Helmet/Meta'

import FormContainer from '../../FormContainer/FormContainer' ;

import  { register }  from '../../../actions/catalogActions' ;




const Catalogadd = ({ location, history }) => {

    const dispatch = useDispatch()

    const [titre, setTitre] = useState('') 
    const [link, setLink] = useState('');

    const [message] = useState(null)


   // const { loading, error, catalogueInfo } =
   // useSelector((state) => state.catalogRegister) || {};

 const catalogRegister = useSelector(state => state.catalogRegister)

   const { loading, catalogueInfo, error } = catalogRegister


    
  //const addcatalogueuser = useSelector(state => state.addcatalogueuser)


// const { loading , catalogueInfo , error } = addcatalogueuser

 const redirect = location.search ? location.search.split('=')[1] : '/'




    useEffect(() => {
        if (catalogueInfo) {
            history.push(redirect)
        }
    }, [catalogueInfo, history, redirect])

////////////

const handleFileChange = (e) => {
    const link = e.target.files[0];
    if (link) {
      // Process the selected file as needed
      console.log('Selected File:', link.name);
      // You can set the file name or path to the state or perform other operations.
      setLink(link.name);
    }
  };
///  


    const submitHandler = (e) => {
 
            dispatch(register(titre, link))
            .then(() => {
                alert('Le succès est catalog');
                history.push('/');
              })
              .catch((error) => {
                // Handle dispatch error
                console.error('Dispatch error:', error);
              });

            e.preventDefault()

    };


   

    const goBack = () => {
        history.goBack(); // This function navigates back to the previous page
      };


    return (

        <FormContainer>
            <Meta
                title=" | ADD CATALOGUE"
            />
             <br />
            <br /> <br />
            <br />
            <h5> Ceci est un espace pour les administrateurs du site  </h5>
           
        

            <h1 style={{ marginTop: '120px' }}> Ajouter un catalogue </h1>
            <Button  type="submit"  style={{ float: 'right',  backgroundColor: 'red'  }} onClick={goBack}>Retourner</Button>       
                <br />
                <br />
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
            <Row>
                    <Col md={10}>
                        <Form.Group controlId='titre'>
                            <Form.Label> titre <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="titre"
                                placeholder="Entrez votre titre "
                                value={titre}
                                required
                                onChange={(e) => setTitre(e.target.value)}
                            ></Form.Control>
                        </Form.Group>


                  
          <span style={{ color: 'red' }}>Les fichiers doivent être dans "frontend\public\epubs" </span>
          <Form.Group controlId="link">
          <Form.Label>Select a file <span style={{ color: 'red' }}>*</span></Form.Label>
    

                      <Form.Control
                        type="file"
                        onChange={(e) => handleFileChange(e)}
                      />
                    </Form.Group>
                    
        
                    <br />  

                        <Button type="submit"  style={{  backgroundColor: 'red'  }} > 
                        
                        Ajouter </Button>
                    </Col>
                </Row>
                <br />
                <br />  <br />
            </Form>
            
        </FormContainer>
    )
}

export default Catalogadd
