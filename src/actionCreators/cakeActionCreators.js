import {apiBaseUrl} from '../config';
import {
    SERVER_GET_CAKES_REQUEST,
    SERVER_GET_CAKES_SUCCESS,
    SERVER_ERROR
}from '../actionTypes/cakeActionTypes';

export function serverGetCakesRequest() {
    return{
        type: SERVER_GET_CAKES_REQUEST
    }

}

export function serverGetCakesSuccess(cakes) {
    return{
        type: SERVER_GET_CAKES_SUCCESS,
        cakes
    }

}

export function serverError() {
    return{
        type: SERVER_ERROR
    }
}

export function userLoadsCakes() {
    return function(dispatch){
        dispatch(serverGetCakesRequest());
        return fetch(
            apiBaseUrl + '/cakes', {
                method: "GET"
            }
        )
        .then(
            response => {
                if (response.ok) {
                    response.json().then(
                        json => {
                            dispatch(serverGetCakesSuccess(json));
                        }
                    )
                }else{
                    dispatch(serverError());
                }
            },
            error => {
                dispatch(serverError());
            }
        )
    }
}