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
    CATALOG_UPDATE_RESET,
    CATALOG_UPDATE_REQUEST,
    CATALOG_UPDATE_SUCCESS,
    CATALOG_UPDATE_FAIL
} from "../constants/catalogConstants"

export const catalogLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case CATALOG_LOGIN_REQUEST:
            return { loading: true }
        case CATALOG_LOGIN_SUCCESS:
            return { loading: false, catalogInfo: action.payload }
        case CATALOG_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        case CATALOG_LOGOUT:
            return {}
        default:
            return state
    }
}

export const catalogRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case CATALOG_REGISTER_REQUEST:
            return { loading: true }
        case CATALOG_REGISTER_SUCCESS:
            return { loading: false, catalogInfo: action.payload }
        case CATALOG_REGISTER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const catalogDetailsReducer = (state = { catalog: {} }, action) => {
    switch (action.type) {
        case CATALOG_DETAILS_REQUEST:
            return { ...state, loading: true }
        case CATALOG_DETAILS_SUCCESS:
            return { loading: false, catalog: action.payload }
        case CATALOG_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        case CATALOG_DETAILS_RESET:
            return { catalog: {} }
        default:
            return state
    }
}

export const catalogUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case CATALOG_UPDATE_PROFILE_REQUEST:
            return { ...state, loading: true }
        case CATALOG_UPDATE_PROFILE_SUCCESS:
            return { loading: false, success: true, catalogInfo: action.payload }
        case CATALOG_UPDATE_PROFILE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const catalogListeReducer = (state = { catalogs: [] }, action) => {
    switch (action.type) {
        case CATALOG_LIST_REQUEST:
            return { loading: true }
        case CATALOG_LIST_SUCCESS:
            return { loading: false, catalogs: action.payload }
        case CATALOG_LIST_FAIL:
            return { loading: false, error: action.payload }
        case CATALOG_LIST_RESET:
            return { catalogs: [] }
        default:
            return state
    }
}

export const catalogDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case CATALOG_DELETE_REQUEST:
            return { loading: true }
        case CATALOG_DELETE_SUCCESS:
            return { loading: false, success: true }
        case CATALOG_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const catalogUpdateReducer = (state = { catalog: {} }, action) => {
    switch (action.type) {
        case CATALOG_UPDATE_REQUEST:
            return { loading: true }
        case CATALOG_UPDATE_SUCCESS:
            return { loading: false, success: true }
        case CATALOG_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case CATALOG_UPDATE_RESET:
            return {
                CATALOG: {}
            }
        default:
            return state
    }
}