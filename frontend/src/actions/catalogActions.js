import axios from 'axios';
import {
    CATALOG_DETAILS_FAIL,
    CATALOG_DETAILS_REQUEST,
    CATALOG_DETAILS_SUCCESS,
    CATALOG_LOGIN_FAIL,
    CATALOG_LOGIN_REQUEST,
    CATALOG_LOGIN_SUCCESS,
    CATALOG_LOGOUT,

    CATALOG_REGISTER_FAIL,
    CATALOG_REGISTER_REQUEST,
    CATALOG_REGISTER_SUCCESS,
    
    CATALOG_UPDATE_PROFILE_REQUEST,
    CATALOG_UPDATE_PROFILE_SUCCESS,
    CATALOG_UPDATE_PROFILE_FAIL,
    CATALOG_DETAILS_RESET,
    CATALOG_LIST_FAIL,
    CATALOG_LIST_REQUEST,
    CATALOG_LIST_SUCCESS,
    CATALOG_LIST_RESET,
    CATALOG_DELETE_REQUEST,
    CATALOG_DELETE_SUCCESS,
    CATALOG_DELETE_FAIL,
    CATALOG_UPDATE_REQUEST,
    CATALOG_UPDATE_SUCCESS,
    CATALOG_UPDATE_FAIL
} from './../constants/catalogConstants.js';

 export const login = (titre, link) => async (dispatch) => {
     try {
         dispatch({
             type: CATALOG_LOGIN_REQUEST,
         });
 
         const config = {
             headers: {
                 'Content-type': 'application/json'
             },
         };
 
         const { data } = await axios.post(
             '/api/catalogs/login',
             { titre, link },
             config
         );
 
         dispatch({
             type: CATALOG_LOGIN_SUCCESS,
             payload: data
         });
 
         localStorage.setItem('catalogInfo', JSON.stringify(data));
     } catch (error) {
         dispatch({
             type: CATALOG_LOGIN_FAIL,
             payload:
                 error.response && error.response.data.message
                     ? error.response.data.message
                     : error.message
         });
     }
 };

export const register = ( titre, link) => async (dispatch) => {
    try {
        dispatch({
            type: CATALOG_REGISTER_REQUEST,
        });

        const config = {
            headers: {
                'Content-type': 'application/json'
            },
        };

        const { data } = await axios.post(
            '/api/catalogs/',
            {  titre, link },
            config
        );

        dispatch({
            type: CATALOG_REGISTER_SUCCESS,
            payload: data
        });

        dispatch({
            type: CATALOG_LOGIN_SUCCESS,
            payload: data
        });

        localStorage.setItem('catalogInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: CATALOG_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        });
    }
};

export const getCatalogDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CATALOG_DETAILS_REQUEST,
        });

        const  { catalogRegister: { catalogInfo } } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${catalogInfo.token}`
            },
        };

        const { data } = await axios.get(
            `/api/catalogs/${id}`,
            config
        );

        dispatch({
            type: CATALOG_DETAILS_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: CATALOG_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        });
    }
};

export const updateCatalogProfile = (catalog) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CATALOG_UPDATE_PROFILE_REQUEST,
        });

        const { catalogRegister: { catalogInfo } } = getState();

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${catalogInfo.token}`
            },
        };

        const { data } = await axios.put(
            `/api/catalogs/profile`,
            catalog,
            config
        );

        dispatch({
            type: CATALOG_UPDATE_PROFILE_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: CATALOG_UPDATE_PROFILE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        });
    }
};

export const listCatalogs = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: CATALOG_LIST_REQUEST,
        });

        const { catalogRegister: { catalogInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${catalogInfo.token}`
            },
        };

        const { data } = await axios.get(`/api/catalogs`, config);

        dispatch({
            type: CATALOG_LIST_SUCCESS,
            payload: data
        });
        
        } catch (error) {
        dispatch({
            type: CATALOG_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        });
    }
};

export const deleteCatalogs = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CATALOG_DELETE_REQUEST,
        });

        const { catalogRegister: { catalogInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${catalogInfo.token}`
            },
        };

        // eslint-disable-next-line no-unused-vars
        const { data } = await axios.delete(`/api/catalogs/${id}`, config);

        dispatch({
            type: CATALOG_DELETE_SUCCESS,
        });

    } catch (error) {
        dispatch({
            type: CATALOG_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        });
    }
};

export const updateCatalog = (catalog) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CATALOG_UPDATE_REQUEST,
        });

        const { catalogRegister: { catalogInfo } } = getState();

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${catalogInfo.token}`
            },
        };

        const { data } = await axios.put(`/api/catalogs/${catalog._id}`, catalog, config);
    

        dispatch({ type: CATALOG_UPDATE_SUCCESS });

        dispatch({
            type: CATALOG_DETAILS_SUCCESS,
            payload: data
        });

        dispatch({ type: CATALOG_DETAILS_RESET });

    } catch (error) {
        dispatch({
            type: CATALOG_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        });
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('catalogInfo');
    dispatch({ type: CATALOG_LOGOUT });
    dispatch({ type: CATALOG_DETAILS_RESET });
    dispatch({ type: CATALOG_LIST_RESET });
};
