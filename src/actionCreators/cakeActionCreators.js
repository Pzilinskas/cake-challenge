import {apiBaseUrl} from '../config';
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

export function serverGetCakeRequest() {
    return{
        type: SERVER_GET_CAKE_REQUEST
    }

}

export function serverGetCakeSuccess(cake) {
    return{
        type: SERVER_GET_CAKE_SUCCESS,
        cake
    }

}

export function serverGetCakeInvalid() {
    return{
        type: SERVER_GET_CAKE_INVALID
    }

}

export function serverCreateCakeRequest() {
    return{
        type: SERVER_CREATE_CAKE_REQUEST
    }

}

export function serverCreateCakeSuccess(name, comment, imageUrl, yumFactor) {
    return{
        type: SERVER_CREATE_CAKE_SUCCESS,
        name,
        comment,
        imageUrl,
        yumFactor
    }

}

export function serverCreateCakeInvalid() {
    return{
        type: SERVER_CREATE_CAKE_INVALID
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

export function userLoadsCake(cakeId) {
    return function(dispatch){
        dispatch(serverGetCakeRequest());
        return fetch(
            apiBaseUrl + '/cakes/' + cakeId, {
                method: "GET"
            }
        )
            .then(
                response => {
                    if (response.ok) {
                        response.json().then(
                            json => {
                                dispatch(serverGetCakeSuccess(json));
                            }
                        )
                    }else{
                        dispatch(serverGetCakeInvalid());
                    }
                },
                error => {
                    dispatch(serverError());
                }
            )
    }
}
export function userCreatesCake(name, comment, imageUrl, yumFactor) {
    return function(dispatch){
        dispatch(serverCreateCakeRequest());
        return fetch(
            apiBaseUrl + '/cakes/', {
                method: "POST",
                body: JSON.stringify(
                    {
                        name,
                        comment,
                        imageUrl,
                        yumFactor
                    }
                ),
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(
                response => {
                    if (response.ok) {
                        response.json().then(
                            json => {
                                dispatch(serverCreateCakeSuccess(json));
                            }
                        )
                    }else{
                        dispatch(serverCreateCakeInvalid());
                    }
                },
                error => {
                    dispatch(serverError());
                }
            )
    }
}