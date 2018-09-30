import {
    SERVER_GET_CAKES_REQUEST,
    SERVER_GET_CAKES_SUCCESS,
    SERVER_ERROR
}from '../actionTypes/cakeActionTypes';

const initialGetCakesState = {
    isGettingCakes: false,
    cakes: []
}
const initialServerErrorState = false;

const initialState = {
    ...initialGetCakesState,
    ...initialServerErrorState
}

export function cake(state = initialState, action){
    switch (action.type){
        case SERVER_GET_CAKES_REQUEST:
            return{
                isGettingCakes: true,
            }
        case SERVER_GET_CAKES_SUCCESS:
            return{
                ...initialState,
                cakes: action.cakes
            }
        case SERVER_ERROR:
            return{
                initialServerErrorState: true
            }
        default:
            return state

    }
}