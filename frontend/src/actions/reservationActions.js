import axios from 'axios';
import { //reservation RESERVATION
    RESERVATION_DETAILS_FAIL,
    RESERVATION_DETAILS_REQUEST,
    RESERVATION_DETAILS_SUCCESS,

    RESERVATION_LOGIN_FAIL,
    RESERVATION_LOGIN_REQUEST,
    RESERVATION_LOGIN_SUCCESS,
    RESERVATION_LOGOUT,

    RESERVATION_REGISTER_FAIL,
    RESERVATION_REGISTER_REQUEST,
    RESERVATION_REGISTER_SUCCESS,

    RESERVATION_ADD_FAIL,
    RESERVATION_ADD_REQUEST,
    RESERVATION_ADD_SUCCESS,

    RESERVATION_UPDATE_PROFILE_REQUEST,
    RESERVATION_UPDATE_PROFILE_SUCCESS,
    RESERVATION_UPDATE_PROFILE_FAIL,
    RESERVATION_DETAILS_RESET,
    RESERVATION_LIST_FAIL,
    RESERVATION_LIST_REQUEST,
    RESERVATION_LIST_SUCCESS,
    RESERVATION_LIST_RESET,
    RESERVATION_DELETE_REQUEST,
    RESERVATION_DELETE_SUCCESS,
    RESERVATION_DELETE_FAIL,
    RESERVATION_UPDATE_REQUEST,
    RESERVATION_UPDATE_SUCCESS,
    RESERVATION_UPDATE_FAIL
} from '../constants/reservationConstants.js';


 export const login = (nbjour , serviice , date0 , date1 ,  email ,phonenumber) => async (dispatch) => {
     try {
         dispatch({
             type: RESERVATION_LOGIN_REQUEST,
         });
 
         const config = {
             headers: {
                 'Content-type': 'application/json'
             },
         };
 
         const { data } = await axios.post(
             '/api/reservations/login',
             { email ,phonenumber, nbjour , serviice , date0, date1 },
             config
         );
 
         dispatch({
             type: RESERVATION_LOGIN_SUCCESS,
             payload: data
         });
 
         localStorage.setItem('reservationInfo', JSON.stringify(data));
     } catch (error) {
         dispatch({
             type: RESERVATION_LOGIN_FAIL,
             payload:
                 error.response && error.response.data.message
                     ? error.response.data.message
                     : error.message
         });
     }
 };

 export const register = (email, phonenumber, nbjour, serviice, date0, date1) => async (dispatch) => {
    try {
        dispatch({
            type: RESERVATION_REGISTER_REQUEST,
        });

        const config = {
            headers: {
                'Content-type': 'application/json',
            },
        };

        const { data } = await axios.post(
            '/api/reservations/',
            { email, phonenumber, nbjour, serviice, date0, date1 },
            config
        );

        dispatch({
            type: RESERVATION_REGISTER_SUCCESS,
            payload: data,
        });

        // Only dispatch login success if the registration was successful
        if (data.token) {
            dispatch({
                type: RESERVATION_LOGIN_SUCCESS,
                payload: data,
            });

            localStorage.setItem('reservationInfo', JSON.stringify(data));
            console.log('Token:', data.token);
        }

    } catch (error) {
        dispatch({
            type: RESERVATION_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};


export const getReservationDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: RESERVATION_DETAILS_REQUEST,
        });

        const  { reservationRegister: { reservationInfo } } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${reservationInfo.token}`
            },
        };

        const { data } = await axios.get(
            `/api/reservations/${id}`,
            config
        );


            dispatch({
            type: RESERVATION_DETAILS_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: RESERVATION_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        });
    }
};

export const updateReservationProfile = (reservation) => async (dispatch, getState) => {
    try {
        dispatch({
            type: RESERVATION_UPDATE_PROFILE_REQUEST,
        });

        const { reservationRegister: { reservationInfo } } = getState();

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${reservationInfo.token}`
            },
        };

        const { data } = await axios.put(
            `/api/reservations/profile`,
            reservation,
            config
        );

        dispatch({
            type: RESERVATION_UPDATE_PROFILE_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: RESERVATION_UPDATE_PROFILE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        });
    }
};

export const listReservations = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: RESERVATION_LIST_REQUEST,
        });

        const { reservationRegister: { reservationInfo } } = getState();

        const config = {
            headers: {
                Authorization: reservationInfo ? `Bearer ${reservationInfo.token}` : '',
            },
        };

        const { data } = await axios.get(`/api/reservations`, config);

        dispatch({
            type: RESERVATION_LIST_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: RESERVATION_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        });
    }
};



export const deleteReservations = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: RESERVATION_DELETE_REQUEST,
        });

        const { reservationRegister: { reservationInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${reservationInfo.token}`
            },
        };

        // eslint-disable-next-line no-unused-vars
        const { data } = await axios.delete(`/api/reservations/${id}`, config);

        dispatch({
            type: RESERVATION_DELETE_SUCCESS,
        });

    } catch (error) {
        dispatch({
            type: RESERVATION_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        });
    }
};

export const updateReservation = (reservation) => async (dispatch, getState) => {
    try {
        dispatch({
            type: RESERVATION_UPDATE_REQUEST,
        });

        const { reservationRegister: { reservationInfo } } = getState();

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${reservationInfo.token}`
            },
        };

        const { data } = await axios.put(`/api/reservations/${reservation._id}`, reservation, config);


        dispatch({ type: RESERVATION_UPDATE_SUCCESS });

        dispatch({
            type: RESERVATION_DETAILS_SUCCESS,
            payload: data
        });

        dispatch({ type: RESERVATION_DETAILS_RESET });

    } catch (error) {
        dispatch({
            type: RESERVATION_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        });
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('reservationInfo');
    dispatch({ type: RESERVATION_LOGOUT });
    dispatch({ type: RESERVATION_DETAILS_RESET });
    dispatch({ type: RESERVATION_LIST_RESET });
};


