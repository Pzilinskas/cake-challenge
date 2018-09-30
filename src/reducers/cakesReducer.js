import {
    SERVER_GET_CAKES_REQUEST,
    SERVER_GET_CAKES_SUCCESS,
    SERVER_GET_CAKE_REQUEST,
    SERVER_GET_CAKE_SUCCESS,
    SERVER_GET_CAKE_INVALID,
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
const initialServerErrorState = false;

const initialState = {
    ...initialGetCakesState,
    ...initialGetCakeState,
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
        case SERVER_ERROR:
            return{
                initialServerErrorState: true
            }
        default:
            return state

    }
}