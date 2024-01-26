import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


import {
    userLoginReducer,
    userRegisterReducer,
    userAddReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListeReducer,
    userDeleteReducer,
    userUpdateReducer
} from './reducers/userReducer.js'

import {
    catalogLoginReducer,
    catalogRegisterReducer,
    catalogDetailsReducer,
    catalogUpdateProfileReducer,
    catalogListeReducer,
    catalogDeleteReducer,
    catalogUpdateReducer
} from './reducers/catalogReducer.js'

import {
    
    reservationRegisterReducer,
    reservationDetailsReducer,
    reservationUpdateProfileReducer,
    reservationListeReducer,
    reservationDeleteReducer,
    reservationUpdateReducer
} from './reducers/reservationReducer.js'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userAdd: userAddReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListeReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    
    catalogLogin: catalogLoginReducer,
    catalogRegister: catalogRegisterReducer,
    catalogDetails: catalogDetailsReducer,
    catalogUpdateProfile: catalogUpdateProfileReducer,
    catalogList: catalogListeReducer,
    catalogDelete: catalogDeleteReducer,
    catalogUpdate: catalogUpdateReducer,

    reservationRegister: reservationRegisterReducer,
    reservationDetails: reservationDetailsReducer,
    reservationUpdateProfile: reservationUpdateProfileReducer,
    reservationList: reservationListeReducer,
    reservationDelete: reservationDeleteReducer,
    reservationUpdate: reservationUpdateReducer
})

//const cartItemsFromStorage = localStorage.getItem('cartItems')
  //  ? JSON.parse(localStorage.getItem('cartItems'))
   // : []

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const catalogInfoFromStorage = localStorage.getItem('catalogInfo')
    ? JSON.parse(localStorage.getItem('catalogInfo'))
    : null

const reservationInfoFromStorage = localStorage.getItem('reservationInfo')
    ? JSON.parse(localStorage.getItem('reservationInfo'))
    : null

const initialState = {
  
    catalogRegister: { catalogInfo: catalogInfoFromStorage     },

    reservationRegister: { reservationInfo: reservationInfoFromStorage     },


    userLogin: { userInfo: userInfoFromStorage     } ,

}



const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store


