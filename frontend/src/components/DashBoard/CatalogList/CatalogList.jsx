import React, { useEffect , }  from 'react' 
import  {LinkContainer}  from 'react-router-bootstrap'

import {Table, Button, Container } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'

import Message from '../../Message/Message' 
import Loader from '../../Loader/Loader' 

import { listCatalogs , deleteCatalogs }  from '../../../actions/catalogActions'




const CatalogList = ({ history }) => {

    const dispatch = useDispatch()

    const catalogList = useSelector(state => state.catalogList)
    const { loading, error, catalogs } = catalogList

    const catalogRegister = useSelector(state => state.catalogRegister)
    const { catalogInfo } = catalogRegister

    const catalogDelete = useSelector(state => state.catalogDelete)
    const { success: successDelete } = catalogDelete

   

    useEffect(() => {
     (catalogInfo) && dispatch(listCatalogs())
  
    }, [dispatch, successDelete, catalogInfo])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteCatalogs(id))
        }
    }





    const goBack = () => {
        history.goBack(); // This function navigates back to the previous page
      };

    return (
        <div className="main"  fluid >

        <div>
            <LinkContainer style={{ float: 'right',  backgroundColor: 'red'  }}   to="/catalogadd">
                <Button style={{  backgroundColor: 'red'  }} className="mr-3 mb-3"> ajouter un Catalogue </Button>
                
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
                                         <th>Titre</th>
                                         <th>link </th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        catalogs.map(catalog => (
                                            <tr key={catalog._id}>
                                                <td>{catalog.titre}</td>
                                                <td>{catalog.link}</td>
                                             
                                                <td>
                                                    <LinkContainer to={`/catalog/${catalog._id}/edit`}>
                                                        <Button variant="light" className="btn btn-sm">
                                                            <i className="fas fa-edit"></i>
                                                        </Button>
                                                    </LinkContainer>

                                                    
                                                    <Button
                                                        variant="danger"
                                                        className="btn-sm mr-2"
                                                        onClick={() => deleteHandler(catalog._id)}
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

export default CatalogList
