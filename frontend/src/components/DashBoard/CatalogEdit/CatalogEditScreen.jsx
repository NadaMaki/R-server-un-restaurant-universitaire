import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCatalogDetails, updateCatalog } from '../../../actions/catalogActions';
import Message from '../../Message/Message';
import Loader from '../../Loader/Loader';
import FormContainer from '../../FormContainer/FormContainer';
import Meta from '../../Helmet/Meta';

const CatalogEditScreen = ({ match, history }) => {
  const catalogId = match.params.id;

  const [titre, setTitre] = useState('');
  const [link, setLink] = useState('');

  const dispatch = useDispatch();

  const catalogDetails = useSelector((state) => state.catalogDetails);
  const { loading, catalog, error } = catalogDetails;

  const catalogUpdate = useSelector((state) => state.catalogUpdate);
  const { loading: loadingUpdate, success: successUpdate, error: errorUpdate } = catalogUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: 'CATALOG_UPDATE_RESET' });
      history.push('/cataloglist');
    } else {
        if (  catalog._id !== catalogId) {   

        dispatch(getCatalogDetails(catalogId));
      } else {
        setTitre(catalog.titre);
        setLink(catalog.link);
      }
    }
  }, [catalog, catalogId, dispatch, successUpdate, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateCatalog({ _id: catalogId, titre, link }));
  };


  const handleFileChange = (e) => {
    const link = e.target.files[0];
    if (link) {
      // Process the selected file as needed
      console.log('Selected File:', link.name);
      // You can set the file name or path to the state or perform other operations.
      setLink(link.name);
    }
  };

  const goBack = () => {
    history.goBack(); // This function navigates back to the previous page
  };


  return (
    <>
      <Meta title=" | Catalog Edit" />
      <FormContainer>
        <h1 style={{ marginTop: '120px' }}>Modification du catalogue </h1>
        <Button  type="submit"  style={{ float: 'right',  backgroundColor: 'red'  }} onClick={goBack}>Retourner</Button>      
        <br />  <br />
 

        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler} style={{ marginBottom: '50px' }}>

            
               <Form.Group controlId="titre">
              <Form.Label>Titre <span style={{ color: 'red' }}>*</span></Form.Label>
              <Form.Control
                type="text"
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
              />
            </Form.Group>
            <br />  <br />
    

            <Form.Group controlId="link">
              <Form.Label>Document : <span style={{ color: 'red' }}>*</span></Form.Label>
              <Form.Control
                value={link ?? ""}
                type="text"
              />
            </Form.Group>

            <Form.Group controlId="link">
              <Form.Label> <span style={{ color: 'red' }}>Pour modifier un fichier, choisissez Nouveau lien</span></Form.Label>
              <Form.Control
                type="file"
                onChange={handleFileChange}
              />
            </Form.Group>
            <Button type="submit" style={{ backgroundColor: 'red' }}>
              Mettre à jour
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default CatalogEditScreen;
