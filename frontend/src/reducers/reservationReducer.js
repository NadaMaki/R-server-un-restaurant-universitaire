import {
    RESERVATION_DETAILS_FAIL,
    RESERVATION_DETAILS_REQUEST,
    RESERVATION_DETAILS_SUCCESS,
   
    RESERVATION_REGISTER_FAIL,
    RESERVATION_REGISTER_REQUEST,
    RESERVATION_REGISTER_SUCCESS,

    RESERVATION_FAIL,
    RESERVATION_REQUEST,
    RESERVATION_SUCCESS,

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
    RESERVATION_UPDATE_RESET,
    RESERVATION_UPDATE_REQUEST,
    RESERVATION_UPDATE_SUCCESS,
    RESERVATION_UPDATE_FAIL
} from "../constants/reservationConstants"



export const reservationRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case RESERVATION_REGISTER_REQUEST:
            return { loading: true }
        case RESERVATION_REGISTER_SUCCESS:
            return { loading: false, reservationInfo: action.payload }
        case RESERVATION_REGISTER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const reservationReducer = (state = {}, action) => {
    switch (action.type) {
        case RESERVATION_REQUEST:
            return { loading: true }
        case RESERVATION_SUCCESS:
            return { loading: false, reservationInfo: action.payload }
        case RESERVATION_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const reservationAddReducer = (state = {}, action) => {
    switch (action.type) {
        case RESERVATION_ADD_REQUEST:
            return { loading: true }
        case RESERVATION_ADD_SUCCESS:
            return { loading: false, reservationInfo: action.payload }
        case RESERVATION_ADD_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const reservationDetailsReducer = (state = { reservation: {} }, action) => {
    switch (action.type) {
        case RESERVATION_DETAILS_REQUEST:
            return { ...state, loading: true }
        case RESERVATION_DETAILS_SUCCESS:
            return { loading: false, reservation: action.payload }
        case RESERVATION_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        case RESERVATION_DETAILS_RESET:
            return { reservation: {} }
        default:
            return state
    }
}

export const reservationUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case RESERVATION_UPDATE_PROFILE_REQUEST:
            return { ...state, loading: true }
        case RESERVATION_UPDATE_PROFILE_SUCCESS:
            return { loading: false, success: true, reservationInfo: action.payload }
        case RESERVATION_UPDATE_PROFILE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const reservationListeReducer = (state = { reservations: [] }, action) => {
    switch (action.type) {
        case RESERVATION_LIST_REQUEST:
            return { loading: true }
        case RESERVATION_LIST_SUCCESS:
            return { loading: false, reservations: action.payload }
        case RESERVATION_LIST_FAIL:
            return { loading: false, error: action.payload }
        case RESERVATION_LIST_RESET:
            return { reservations: [] }
        default:
            return state
    }
}

export const reservationDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case RESERVATION_DELETE_REQUEST:
            return { loading: true }
        case RESERVATION_DELETE_SUCCESS:
            return { loading: false, success: true }
        case RESERVATION_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const reservationUpdateReducer = (state = { reservation: {} }, action) => {
    switch (action.type) {
        case RESERVATION_UPDATE_REQUEST:
            return { loading: true }
        case RESERVATION_UPDATE_SUCCESS:
            return { loading: false, success: true }
        case RESERVATION_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case RESERVATION_UPDATE_RESET:
            return {
                reservation: {}
            }
        default:
            return state
    }
}

