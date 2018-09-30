import {
    SERVER_GET_CAKES_REQUEST,
    SERVER_GET_CAKES_SUCCESS,
    SERVER_GET_CAKE_REQUEST,
    SERVER_GET_CAKE_SUCCESS,
    SERVER_GET_CAKE_INVALID,
    SERVER_CREATE_CAKE_REQUEST,
    SERVER_CREATE_CAKE_SUCCESS,
    SERVER_CREATE_CAKE_INVALID,
    SERVER_ERROR
}from '../actionTypes/cakeActionTypes';

const initialGetCakesState = {
    isGettingCakes: false,
    cakes: []
}
const initialGetCakeState = {
    isGettingCake: false,
    getCakeInvalid: false,
    currentCake: {}
}
const initialCreateCakeState = {
    isCreatingCake: false,
    createCakeInvalid: false,
    createCakeSuccessful: false,
}
const initialServerErrorState = {
    serverError: false
};


const initialState = {
    ...initialGetCakesState,
    ...initialGetCakeState,
    ...initialCreateCakeState,
    ...initialServerErrorState
}

export function cake(state = initialState, action){
    switch (action.type){
        case SERVER_GET_CAKES_REQUEST:
            return{
                ...state,
                isGettingCakes: true,
            }
        case SERVER_GET_CAKES_SUCCESS:
            return{
                ...state,
                ...initialGetCakesState,
                cakes: action.cakes
            }
        case SERVER_GET_CAKE_REQUEST:
            return{
                ...state,
                ...initialGetCakeState,
                isGettingCake: true
            }
        case SERVER_GET_CAKE_SUCCESS:
            return{
                ...state,
                ...initialGetCakeState,
                currentCake: action.cake
            }
        case SERVER_GET_CAKE_INVALID:
            return{
                ...state,
                ...initialGetCakeState,
                getCakeInvalid: true,
            }
        case SERVER_CREATE_CAKE_REQUEST:
            return{
                ...state,
                ...initialCreateCakeState,
                isCreatingCake: true
            }
        case SERVER_CREATE_CAKE_SUCCESS:
            return{
                ...state,
                ...initialCreateCakeState,
                createCakeSuccessful: true
            }
        case SERVER_CREATE_CAKE_INVALID:
            return{
                ...state,
                ...initialCreateCakeState,
                createCakeInvalid: true
            }
        case SERVER_ERROR:
            return{
                ...state,
                serverError: true
            }
        default:
            return state

    }
}